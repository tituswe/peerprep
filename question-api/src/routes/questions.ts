import { Request, Response, Router } from 'express';

const mongoose = require('mongoose');
const Question = require('../models/question');

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json('from Questions!');
});

router.post('/', async (req: Request, res: Response) => {
  const question = new Question({
    title: req.body.title,
    difficulty: req.body.difficulty,
    tags: req.body.tags,
    description: req.body.description,
    examples: req.body.examples,
    constraints: req.body.constraints
  });

  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
