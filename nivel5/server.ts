import express, { NextFunction, Request, Response } from "express";
import Carro from "./model/Carro";

const app = express();

app.use(express.json());

app.get('/time', (req: Request, res: Response) => {
  const { marca, modelo, ano } = req.query;

  if (typeof marca !== 'string' || !marca) {
    throw new Error("Marca obrigatória");
  } else if (typeof modelo !== 'string' || !modelo) {
     throw new Error("Modelo obrigatório");
  } else if (isNaN(Number(ano)) || !ano) {
    throw new Error("Ano obrigatório");
  }

  const carro = new Carro(marca, modelo, Number(ano));

  const detalhes = carro.obterDetalhes();

  res.status(200).json({
    data: "OK",
    code: 200
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || "Erro interno no servidor",
    code: err.status || 500
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
