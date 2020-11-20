import {
  StartNewChallenge,
  Challenge,
  Status,
  ActualAchievement
} from '../types/interfaces';

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
    const id = i.itemId;
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

function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getShuffledArray<T>(array: T[], numberOfElements: number): T[] {
  const shuffleNumbers: number[] = [];
  const result: T[] = [];

  do {
    const num = getRandomInteger(0, numberOfElements);
    if (!shuffleNumbers.includes(num)) {
      shuffleNumbers.push(num);
    }
  } while (shuffleNumbers.length < numberOfElements);

  for (let i = 0; i < shuffleNumbers.length; i++) {
    result.push(array[shuffleNumbers[i]]);
  }

  return result;
}

function generateAchievementsStatus(
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
