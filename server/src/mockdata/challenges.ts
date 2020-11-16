import { actualAchievementsList } from './achivements.json';
import { tasks } from './tasks.json';
import { Challenge, Status } from './../types/interfaces';

const tasksStatus: Record<number, Status> = tasks
  .slice(0, 30)
  .reduce(function (acc: any, cur) {
    const ids = cur.itemId;
    acc[ids] = { state: 'Pending', updated: new Date() };
    return acc;
  }, {});

const achievementsStatus: Record<number, Status> = actualAchievementsList
  .slice(0, 5)
  .reduce(function (acc: any, cur) {
    const ids = cur.itemId;
    acc[ids] = { state: 'Pending', updated: new Date() };
    return acc;
  }, {});

const achievementsStatus2: Record<
  number,
  Status
> = actualAchievementsList.slice(0, 5).reduce(function (acc: any, cur) {
  const ids = cur.itemId;
  acc[ids] = { state: 'Success', updated: new Date() };
  return acc;
}, {});

const threeDaysAgoStartDate = Date.now() - +new Date(3 * 24 * 3600 * 1000);

export const challenges: Challenge[] = [
  {
    challengeId: 0,
    challengeState: 'In Progress',
    startDate: new Date(),
    tasksOrder: tasks.slice(0, 30),
    tasksStatus,
    achievementsStatus
  },
  {
    challengeId: 1,
    challengeState: 'In Progress',
    startDate: new Date(threeDaysAgoStartDate),
    tasksOrder: tasks.slice(0, 30),
    tasksStatus,
    achievementsStatus
  },
  {
    challengeId: 2,
    challengeState: 'In Progress',
    startDate: new Date(threeDaysAgoStartDate),
    tasksOrder: tasks.slice(0, 30),
    tasksStatus,
    achievementsStatus: achievementsStatus2
  }
];
