// import { tasks } from '../mockDB/tasks.json';
// import { allAchievements } from '../mockDB/achivements.json';
import { Request, Response } from 'express';

import { Task } from '../models/Task';
import { Achievement } from '../models/Achievement';
import { Challenge } from '../models/Challenge';

import { startNewChallenge } from '../services/startNewChallenge';
import { generateActualAchievementsList } from '../services/helpers/generateActualAchievementsList';

const express = require('express');
const router = express.Router();

router.post('/', async (req: any, res: Response) => {
  try {
    const tasks = await Task.find();
    const allAchievements = await Achievement.find();

    const achievementsList = generateActualAchievementsList(allAchievements);
    const newChallenge = startNewChallenge(tasks, achievementsList, 30);
    const challenge = new Challenge({ ...newChallenge, owner: req.user._id });

    await challenge.save();

    res.status(201).json({
      message: `New challenge with id = ${challenge.challengeId} was created!`,
      id: challenge._id
    });
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
