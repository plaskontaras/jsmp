import { Response } from 'express';
import Challenge from '../models/Challenge';
import { getAchievements } from '../services/getAchievements';

const express = require('express');
const router = express.Router();

router.get('/', async (req: any, res: Response) => {
  try {
    const challenges = [];
    const currentChallenge = await Challenge.findOne({ owner: req.user._id });

    challenges.push({ ...currentChallenge!.toJSON() });
    const currentAchievement = getAchievements(
      currentChallenge!.challengeId,
      challenges
    );

    res.send(JSON.stringify(currentAchievement));
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
