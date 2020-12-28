import { Response } from 'express';
import ChallengeModel from '../models/Challenge';
import { getTaskArchive } from '../services/getTaskArchive';
import { Challenge } from '../types/interfaces';

const express = require('express');
const router = express.Router();

router.get('/', async (req: any, res: Response) => {
  try {
    const challenges: Challenge[] = [];
    const currentChallenge = await ChallengeModel.findOne({
      owner: req.user._id
    });

    challenges.push({ ...currentChallenge!.toJSON() });
    const currentTaskArchive = getTaskArchive(
      currentChallenge!.challengeId,
      challenges
    );

    res.send(JSON.stringify(currentTaskArchive));
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
