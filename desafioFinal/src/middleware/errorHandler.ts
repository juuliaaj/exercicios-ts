import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Erro interno do servidor',
    code: err.statusCode || 500
  });
}
