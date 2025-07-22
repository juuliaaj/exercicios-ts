import express from "express";
const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString(),
    });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

function validarTarefa(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { titulo } = req.body;
    if (!titulo || typeof titulo !== "string" || titulo.trim() === "") {
        return res.status(400).json({ error: "O campo 'titulo' é obrigatório e deve ser uma string não vazia." });
    }
    next();
}

app.post("/tarefas", validarTarefa, (req, res) => {
    const { titulo } = req.body;
    res.status(201).json({ mensagem: `Tarefa '${titulo}' criada com sucesso.` });
});
