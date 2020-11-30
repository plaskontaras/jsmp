import { CalculateAchievementsStatus } from '../types/interfaces';
import { getCurrentChallenge } from './helpers/getCurrentChallenge';
import { AchievementCompleteCheckers } from './checkers';

export const calculateAchievementsStatus: CalculateAchievementsStatus = (
  challengeId,
  challenges
) => {
  const calculatedStatuses = new Map();

  const currentChallenge = getCurrentChallenge(challengeId, challenges);
  const passedTasks = [];
  const tasksStatus = currentChallenge.tasksStatus;

  const achievements = currentChallenge.achievementsStatus;

  for (const key in tasksStatus) {
    if (tasksStatus[key].state === 'Success') {
      passedTasks.push(tasksStatus[key]);
    }
  }

  for (const achievement in achievements) {
    const key = +achievement;
    const checker = AchievementCompleteCheckers.get(key);

    if (checker) {
      const newStatus = checker(passedTasks);
      calculatedStatuses.set(key, newStatus);
    }
  }

  return calculatedStatuses;
};
