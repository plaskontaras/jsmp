import { allAchievements } from '../mockDB/achivements.json';
import { Achievement } from '../models/Achievement';
import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    for (let i = 0; i < allAchievements.length; i++) {
      const id = allAchievements[i].id;
      const description = allAchievements[i].description;
      const image = allAchievements[i].image;

      const achievement = new Achievement({ id, description, image });
      await achievement.save();
    }
    res.status(201).json({ message: 'Achievements were added to DB!' });
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
