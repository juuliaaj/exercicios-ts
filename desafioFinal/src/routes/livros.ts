import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res, next) => {
  try {
    const { titulo, autor, anoPublicacao } = req.body;

    if (typeof titulo !== 'string' || titulo.trim() === '') {
      return res.status(400).json({ error: 'Título é obrigatório e deve ser uma string.' });
    }
    if (typeof autor !== 'string' || autor.trim() === '') {
      return res.status(400).json({ error: 'Autor é obrigatório e deve ser uma string.' });
    }
    if (typeof anoPublicacao !== 'number' || anoPublicacao > new Date().getFullYear()) {
      return res.status(400).json({ error: 'Ano de publicação inválido ou no futuro.' });
    }

    const livro = await prisma.livro.create({
      data: {
        titulo,
        autor,
        anoPublicacao,
        disponivel: true
      }
    });

    res.status(201).json(livro);

  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const { autor, disponivel } = req.query;

    // Construir filtro dinâmico
    const where: any = {};
    if (autor && typeof autor === 'string') {
      where.autor = autor;
    }
    if (disponivel === 'true') {
      where.disponivel = true;
    } else if (disponivel === 'false') {
      where.disponivel = false;
    }

    const livros = await prisma.livro.findMany({ where });
    res.json(livros);

  } catch (error) {
    next(error);
  }
});

router.patch('/:id/emprestar', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const livro = await prisma.livro.findUnique({ where: { id } });
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    if (!livro.disponivel) {
      return res.status(400).json({ error: 'Livro já está indisponível para empréstimo' });
    }

    const livroAtualizado = await prisma.livro.update({
      where: { id },
      data: { disponivel: false }
    });

    res.json(livroAtualizado);

  } catch (error) {
    next(error);
  }
});

export default router;

