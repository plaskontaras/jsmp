import { GetTaskArchive } from '../types/interfaces';

export const getTaskArchive: GetTaskArchive = (id, challenges) => {
  const currentChallenge = challenges.find((i) => i.challengeId === id);

  if (!currentChallenge) {
    throw new Error('required challenge does not exsit!');
  }

  const result = [];
  const tasksOrder = currentChallenge.tasksOrder;
  const currentDate = new Date().getDate();
  const currentChallengeStartDate = currentChallenge.startDate.getDate();
  const pastTasks = tasksOrder.slice(
    0,
    currentDate - currentChallengeStartDate
  );

  for (let i = 0; i < pastTasks.length; i++) {
    result.push({
      itemId: pastTasks[i].itemId,
      description: pastTasks[i].description,
      status: { ...currentChallenge.tasksStatus[pastTasks[i].itemId] }
    });
  }

  return result;
};
