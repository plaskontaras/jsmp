import { ActualAchievement, Status } from '../../types/interfaces';
import { getShuffledArray } from './getShuffledArray';

export function generateAchievementsStatus(
  achievementsList: ActualAchievement[],
  achievementsAmount: number
): Record<number, Status> {
  const result = getShuffledArray(
    achievementsList.filter(
      (i) =>
        i.description !== 'Complete half of the tasks' &&
        i.description !== 'Complete all tasks'
    ),
    achievementsAmount - 2
  ).reduce(function (acc: any, cur: any) {
    acc[cur.id] = { state: 'Pending', updated: new Date().getTime() };
    return acc;
  }, {});

  const halfOfTasksAchievement = achievementsList.find((i) => {
    return i.description === 'Complete half of the tasks';
  });

  if (halfOfTasksAchievement) {
    result[halfOfTasksAchievement.id] = {
      state: 'Pending',
      updated: new Date().getTime()
    };
  } else {
    throw new Error('achievement "Complete half of the tasks" does not exist!');
  }

  const completeAllTasksAchievement = achievementsList.find((i) => {
    return i.description === 'Complete all tasks';
  });

  if (completeAllTasksAchievement) {
    result[completeAllTasksAchievement.id] = {
      state: 'Pending',
      updated: new Date().getTime()
    };
  } else {
    throw new Error('achievement "Complete all tasks" does not exist!');
  }

  return result;
}
