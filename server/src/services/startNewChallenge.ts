import { StartNewChallenge, Challenge, Status } from '../types/interfaces';
import { getShuffledArray } from './helpers/getShuffledArray';
import { generateAchievementsStatus } from './helpers/generateAchievementsStatus';

export const startNewChallenge: StartNewChallenge = (
  tasksList,
  achievementsList,
  challengeDuration = 30
) => {
  const startNewChallengeDate = new Date().getTime();

  const tasksOrder = getShuffledArray(tasksList, challengeDuration);

  const achievementsAmount = Math.floor(challengeDuration / 6);
  const achievementsStatus = generateAchievementsStatus(
    achievementsList,
    achievementsAmount
  );

  const tasksStatus: Record<number, Status> = {};

  tasksOrder.forEach((i) => {
    const id = i.id;
    tasksStatus[id] = { state: 'Pending', updated: startNewChallengeDate };
  });

  const newChallenge: Challenge = {
    challengeId: Date.now(),
    challengeState: 'In Progress',
    startDate: new Date(startNewChallengeDate),
    tasksOrder,
    tasksStatus,
    achievementsStatus
  };

  return newChallenge;
};
