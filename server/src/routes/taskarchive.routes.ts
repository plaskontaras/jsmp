// import { tasks } from '../mockDB/tasks.json';
// import { allAchievements } from '../mockDB/achivements.json';
import { Request, Response } from 'express';
import { Challenge } from '../models/Challenge';
import { getTaskArchive } from '../services/getTaskArchive';

const UserModel = require('../models/User');

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const challenges: any = [];
    const user = await UserModel.findOne({ email: req.body.email });
    const currentChallenge = await Challenge.findOne({ owner: user._id });

    challenges.push({ ...currentChallenge.toJSON() });
    const currentTaskArchive = getTaskArchive(
      currentChallenge.challengeId,
      challenges
    );

    res.send(JSON.stringify(currentTaskArchive));
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;

// app.get('/taskarchive', (req: any, res: any) => {
//   const challengeAchievements = getTaskArchive(
//     challenges[0].challengeId,
//     challenges
//   );
//   res.send(JSON.stringify(challengeAchievements));
// });
