import { Response } from 'express';
import Challenge from '../models/Challenge';
import { calculateAchievementsStatus } from '../services/calculateAchievementsStatus';
import { getCurrentTask } from '../services/getCurrentTask';

const express = require('express');
const router = express.Router();

router.post('/', async (req: any, res: Response) => {
  try {
    const challenges: any = [];
    const currentChallenge: any = await Challenge.findOne({
      owner: req.user._id
    });

    if (currentChallenge) {
      challenges.push({ ...currentChallenge.toJSON() });

      const newAchievementStatuses = calculateAchievementsStatus(
        currentChallenge.challengeId,
        challenges
      );

      const currentAchievements: any = currentChallenge.achievementsStatus;

      for (const key in currentAchievements) {
        currentAchievements[key].state = newAchievementStatuses.get(+key);
      }

      // ============================
      // finish task
      const currentTask = getCurrentTask(
        currentChallenge.challengeId,
        challenges
      );
      const newTaskStatus: any = {};

      for (const key in currentChallenge.tasksStatus) {
        if (currentTask.id === +key) {
          newTaskStatus[key] = {
            state: 'Success',
            updated: Date.now()
          };
        } else {
          newTaskStatus[key] = currentChallenge.tasksStatus[key];
        }
      }
      // ============================

      currentChallenge.achievementsStatus = currentAchievements;
      currentChallenge.tasksStatus = newTaskStatus;

      const updatedChallenge = await Challenge.findOneAndUpdate(
        { owner: req.user._id },
        currentChallenge
      );

      res.send(JSON.stringify(updatedChallenge!.achievementsStatus));
    }
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
