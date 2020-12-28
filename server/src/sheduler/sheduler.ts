import ChallengeModel from '../models/Challenge';
import { getCurrentTask } from '../services';
import { calculateAchievementsStatus } from '../services/calculateAchievementsStatus';
import schedule from 'node-schedule';
import { Challenge, Status } from '../types/interfaces';

export const startSheduler = () => {
  // schedule.scheduleJob({ second: 20 }, async function () {
  schedule.scheduleJob({ hour: 23, minute: 59, second: 59 }, async function () {
    const allChallenges = await ChallengeModel.find();

    for (let i = 0; i < allChallenges.length; i++) {
      const currentChallenge: any = allChallenges[i];
      const challenges: Challenge[] = [];
      challenges.push({ ...currentChallenge.toJSON() });

      const currentTask = getCurrentTask(
        currentChallenge.challengeId,
        challenges
      );

      const newAchievementStatuses = calculateAchievementsStatus(
        currentChallenge.challengeId,
        challenges
      );

      const currentAchievements = currentChallenge.achievementsStatus;

      for (const key in currentAchievements) {
        currentAchievements[key].state = newAchievementStatuses.get(+key);
      }

      const newTaskStatus: Record<number, Status> = {};

      for (const key in currentChallenge.tasksStatus) {
        if (
          currentTask.id === +key &&
          currentChallenge.tasksStatus[key].state !== 'Success'
        ) {
          newTaskStatus[+key] = {
            state: 'Failure',
            updated: Date.now()
          };
        } else {
          newTaskStatus[+key] = currentChallenge.tasksStatus[key];
        }
      }

      currentChallenge.achievementsStatus = currentAchievements;
      currentChallenge.tasksStatus = newTaskStatus;
      await ChallengeModel.findOneAndUpdate(
        { challengeId: currentChallenge.challengeId },
        currentChallenge
      );

      // Calculate the achievements status and the challenge state at 12 AM of the last day of the challenge
      const endOfChallengeDate = new Date(
        +currentChallenge.startDate + 30 * 24 * 3600 * 1000
      ).getDate();
      // let endOfChallengeDate = new Date(+currentChallenge.startDate).getDate(); // fake today end
      const presentDay = new Date().getDate();

      if (endOfChallengeDate === presentDay) {
        // equak logic to put /api/challenge!!!!!!
        let successCompletedTasksCounter = 0;
        const finalTasksStatus = currentChallenge.tasksStatus;
        const challengeTasksAmount = currentChallenge.tasksOrder.length;
        for (const key in finalTasksStatus) {
          if (finalTasksStatus[key].state === 'Success') {
            successCompletedTasksCounter++;
          }
        }

        const newChallengeState =
          successCompletedTasksCounter >= challengeTasksAmount * 0.9
            ? 'Success'
            : 'Failure';
        // console.log('sheduler:', 'i work');
        currentChallenge.challengeState = newChallengeState;
        await ChallengeModel.findOneAndUpdate(
          { challengeId: currentChallenge.challengeId },
          currentChallenge
        );
      }
    }
  });
};
