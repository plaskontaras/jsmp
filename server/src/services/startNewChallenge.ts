import {
  StartNewChallenge,
  Task,
  Challenge,
  Status,
  ActualAchievement
} from '../types/interfaces';

export const startNewChallenge: StartNewChallenge = (
  tasksList,
  achievementsList,
  challengeDuration = 30
) => {
  let tasksOrder: Task[] = shuffleArray(tasksList);
  tasksOrder = tasksOrder.slice(0, challengeDuration);

  const achievementsAmount = Math.floor(challengeDuration / 6);
  const achievementsStatus = generateAchievementsStatus(
    achievementsList,
    achievementsAmount
  );

  const tasksStatus = generateTasksStatus(tasksList, challengeDuration);

  const result: Challenge = {
    challengeId: Date.now() + 111,
    challengeState: 'In Progress',
    startDate: new Date(),
    tasksOrder,
    tasksStatus,
    achievementsStatus
  };

  return result;
};

function shuffleArray<T>(array: T[]): T[] {
  const result = array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  // if(array.every( (item,index) => item === result[index])) {
  //     shuffleArray(array)
  // }

  return result;
}

function generateAchievementsStatus(
  achievementsList: ActualAchievement[],
  achievementsAmount: number
): Record<number, Status> {
  const result = shuffleArray(
    achievementsList.filter(
      (i) =>
        i.description !== 'Complete half of the tasks' &&
        i.description !== 'Complete all tasks'
    )
  )
    .slice(0, achievementsAmount - 2)
    .reduce(function (acc: any, cur: any) {
      acc[cur.itemId] = { state: 'Pending', updated: new Date().getTime() };
      return acc;
    }, {});

  const halfOfTasksAchievement = achievementsList.find((i) => {
    return i.description === 'Complete half of the tasks';
  });

  if (halfOfTasksAchievement) {
    result[halfOfTasksAchievement.itemId] = {
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
    result[completeAllTasksAchievement.itemId] = {
      state: 'Pending',
      updated: new Date().getTime()
    };
  } else {
    throw new Error('achievement "Complete all tasks" does not exist!');
  }

  return result;
}

function generateTasksStatus(
  tasksList: Task[],
  challengeDuration: number
): Record<number, Status> {
  const result = tasksList
    .slice(0, challengeDuration)
    .reduce(function (acc: any, cur: any) {
      acc[cur.itemId] = { state: 'Pending', updated: new Date().getTime() };
      return acc;
    }, {});

  return result;
}
