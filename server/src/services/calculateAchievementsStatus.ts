import { CalculateAchievementsStatus } from '../types/interfaces';

export const calculateAchievementsStatus: CalculateAchievementsStatus = (
  challengeId,
  challenges,
  achievements,
  tasksStatus
) => {
  const calculatedStatuses = new Map();
  const passedTasks = [];

  for (const key in tasksStatus) {
    if (tasksStatus[key].state === 'Success') {
      passedTasks.push(tasksStatus[key]);
    }
  }

  const currentChallenge = challenges.find(
    (i) => i.challengeId === challengeId
  );

  if (!currentChallenge) {
    throw new Error('required challenge does not exsit!');
  }

  const actualAchievementsList = currentChallenge.achievementsStatus;

  for (const achievement in actualAchievementsList) {
    const newStatus = achievements[achievement].checkComplete(passedTasks);
    const key = +achievement;
    calculatedStatuses.set(key, newStatus);
  }

  return calculatedStatuses;
};
