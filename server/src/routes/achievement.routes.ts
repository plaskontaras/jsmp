import { allAchievements } from '../mockDB/achivements.json';
const Achievement = require('../models/Achievement');

const express = require('express');
const router = express.Router();

router.post('/', async (req: any, res: any) => {
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
