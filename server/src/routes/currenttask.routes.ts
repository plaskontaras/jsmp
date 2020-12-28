import { getCurrentTask } from '../services/getCurrentTask';
import Challenge from '../models/Challenge';
import { Response } from 'express';

const express = require('express');
const router = express.Router();

router.get('/', async (req: any, res: Response) => {
  try {
    const challenges = [];
    const currentChallenge = await Challenge.findOne({ owner: req.user._id });

    challenges.push({ ...currentChallenge!.toJSON() });
    const currentTask = getCurrentTask(
      currentChallenge!.challengeId,
      challenges
    );

    res.send(JSON.stringify(currentTask));
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
