import { Status } from '../types/interfaces';

export enum AchievementDescription {
  ALL_TASKS = 0,
  HALF_TASKS = 1,
  FOUR_MONDAYS = 2,
  FOUR_SUNDAYS = 3,
  EACH_7_DAYS_A_ROW = 4,
  FIVE_BEFORE_8_AM = 5,
  SEVEN_BEFORE_9_AM = 6
}

export const AchievementCompleteCheckers = new Map([
  [
    AchievementDescription.ALL_TASKS,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }
      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      if (passedTasks.length >= 30) {
        return 'Success';
      }
      return 'Pending';
    }
  ],
  [
    AchievementDescription.HALF_TASKS,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }
      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      if (passedTasks.length >= 15) {
        return 'Success';
      }
      return 'Pending';
    }
  ],
  [
    AchievementDescription.FOUR_MONDAYS,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }

      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      const mondaysTask = passedTasks.reduce((acc, item) => {
        const getDay = new Date(item.updated).getDay();
        if (getDay === 1) {
          acc++;
        }
        return acc;
      }, 0);

      if (mondaysTask >= 4) {
        return 'Success';
      }
      return 'Pending';
    }
  ],
  [
    AchievementDescription.FOUR_SUNDAYS,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }

      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      const mondaysTask = passedTasks.reduce((acc, item) => {
        const getDay = new Date(item.updated).getDay();
        if (getDay === 0) {
          acc++;
        }
        return acc;
      }, 0);

      if (mondaysTask >= 4) {
        return 'Success';
      }
      return 'Pending';
    }
  ],
  [
    AchievementDescription.EACH_7_DAYS_A_ROW,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }
      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      const statusArray = [];
      for (let i = 0; i < passedTasks.length; i++) {
        statusArray.push(passedTasks[i].state);
      }

      if (statusArray.join('').includes('Success'.repeat(7))) {
        return 'Success';
      }

      return 'Pending';
    }
  ],
  [
    AchievementDescription.FIVE_BEFORE_8_AM,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }
      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      const beforeEight = passedTasks.reduce((acc, item) => {
        const getHour = new Date(item.updated).getHours();
        if (getHour <= 8) {
          acc++;
        }
        return acc;
      }, 0);

      if (beforeEight >= 5) {
        return 'Success';
      }

      return 'Pending';
    }
  ],
  [
    AchievementDescription.SEVEN_BEFORE_9_AM,
    (tasksStatus: Record<number, Status>) => {
      const tasksArray = [];
      for (const key in tasksStatus) {
        tasksArray.push(tasksStatus[key]);
      }
      const passedTasks = tasksArray.filter((i) => i.state === 'Success');

      const beforeNine = passedTasks.reduce((acc, item) => {
        const getHour = new Date(item.updated).getHours();
        if (getHour <= 9) {
          acc++;
        }
        return acc;
      }, 0);

      if (beforeNine >= 7) {
        return 'Success';
      }

      return 'Pending';
    }
  ]
]);
