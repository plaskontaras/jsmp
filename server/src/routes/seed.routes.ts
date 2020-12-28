import { Request, Response } from 'express';
import { seed } from '../seeder/seeder';
const express = require('express');
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    await seed();
    res
      .status(201)
      .json({ message: 'Achievements and Tasks were seeded to DB!' });
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
