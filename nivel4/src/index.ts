import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/tarefas", async (req: Request, res: Response) => {
  const { concluida } = req.query;

  const tarefas = await prisma.tarefa.findMany({
    where: {
      concluida: concluida !== undefined ? concluida === "true" : undefined,
      deletadoEm: null
    }
  });

  res.json(tarefas);
});

app.post("/tarefas", async (req: Request, res: Response) => {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== "string") {
    return res.status(400).json({ erro: "Título inválido" });
  }

  const tarefa = await prisma.tarefa.create({
    data: { titulo }
  });

  res.status(201).json(tarefa);
});


app.delete("/tarefas/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const tarefa = await prisma.tarefa.update({
    where: { id },
    data: { deletadoEm: new Date() }
  });

  res.json({ mensagem: "Tarefa marcada como deletada", tarefa });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

app.post("/tarefas", async (req: Request, res: Response) => {
  const { titulo } = req.body;
  const tarefa = await prisma.tarefa.create({
    data: { titulo }
  });
  res.status(201).json(tarefa);
});
