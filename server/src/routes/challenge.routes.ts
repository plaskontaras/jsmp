import { Response } from 'express';
import Task from '../models/Task';
import Achievement from '../models/Achievement';
import Challenge from '../models/Challenge';
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
      message: `New challenge with challengeId = ${challenge.challengeId} was created!`,
      id: challenge._id,
      owner: req.user._id
    });
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

router.get('/', async (req: any, res: Response) => {
  try {
    const currentChallenge = await Challenge.findOne({ owner: req.user._id });
    if (currentChallenge) {
      return res.send(JSON.stringify(currentChallenge));
    }

    res.send(null);
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Error! Something wrong in get /challenge!!!' });
  }
});

router.delete('/', async (req: any, res: Response) => {
  try {
    await Challenge.deleteOne({ owner: req.user._id });
    res.send(null);
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Error! Something wrong in get /challenge!!!' });
  }
});

router.put('/', async (req: any, res: Response) => {
  try {
    const currentChallenge = await Challenge.findOne({ owner: req.user._id });
    let successCompletedTasksCounter = 0;
    const finalTasksStatus: any = currentChallenge!.tasksStatus;
    const challengeTasksAmount = currentChallenge!.tasksOrder.length;

    for (const key in finalTasksStatus) {
      if (finalTasksStatus[key].state === 'Success') {
        successCompletedTasksCounter++;
      }
    }

    const newChallengeState =
      successCompletedTasksCounter >= challengeTasksAmount * 0.9
        ? 'Success'
        : 'Failure';
    const doc = await Challenge.findOneAndUpdate(
      { owner: req.user._id },
      { challengeState: newChallengeState },
      {
        new: true
      }
    );

    return res.send(JSON.stringify(doc));
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Error! Something wrong in get /challenge!!!' });
  }
});

module.exports = router;
