import { startNewChallenge } from '../services/startNewChallenge';
import Achievement from '../models/Achievement';
const Task = require('../models/Task');
const Challenge = require('../models/Challenge');
const User = require('../models/User');

const express = require('express');
const router = express.Router();

router.post('/', async (req: any, res: any) => {
  try {
    const tasksList = await Task.find();
    const achievementsList = await Achievement.find();

    const newChallenge = await startNewChallenge(
      tasksList,
      achievementsList,
      30
    );
    const challenge = new Challenge({ ...newChallenge });

    await challenge.save();
    res.status(201).json({
      message: `New challenge with id: ${challenge.challengeId} was created!`
    });
  } catch (e) {
    res.status(500).json({ message: 'Error! Something diabolic!!!' });
  }
});

module.exports = router;
