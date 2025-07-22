import express from "express";
import { Carro, retornarPrimeiro } from "./classes";
import { errorHandler } from "./middleware";

const app = express();
app.use(express.json());

app.get("/generics", (req, res) => {
  const nums = [5, 10, 15];
  const strs = ["lua", "sol", "estrela"];

  const primeiroNum = retornarPrimeiro(nums);
  const primeiroStr = retornarPrimeiro(strs);

  res.json({
    primeiroNumero: primeiroNum,
    primeiroString: primeiroStr,
  });
});

app.get("/carro", (req, res) => {
  const carro = new Carro("Honda", "Civic", 2020);
  const detalhes = carro.obterDetalhes();
  res.send(detalhes);
});

app.get("/erro", (req, res) => {
  throw new Error("Erro proposital para teste");
});

// Middleware global de erro - deve ser o último middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

