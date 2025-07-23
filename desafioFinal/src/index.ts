import express, { NextFunction, Request, Response } from "express";
import livrosRouter from './routes/livros';

const app = express();
app.use(express.json());
app.use('/livros', livrosRouter);

// Middleware global de erro
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message, code: 500 });
});

app.listen(3000, () => {
  console.log('API Biblioteca rodando na porta 3000');
});

