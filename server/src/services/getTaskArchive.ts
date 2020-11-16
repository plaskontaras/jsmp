import { ArchiveItem, GetTaskArchive, Task } from '../types/interfaces';

export const getTaskArchive: GetTaskArchive = (id, challenges) => {
  const currentChallenge = challenges.find((i) => i.challengeId === id);

  if (!currentChallenge) {
    throw new Error('required challenge does not exsit!');
  }

  const result: ArchiveItem[] = [];
  const tasksOrder = currentChallenge.tasksOrder;
  const actualDate = new Date().getDate();
  const currentChallengeStartDate = currentChallenge.startDate.getDate();
  const pastTasks: Task[] = tasksOrder.slice(
    0,
    actualDate - currentChallengeStartDate
  );

  for (let i = 0; i < pastTasks.length; i++) {
    result.push({
      itemId: pastTasks[i].itemId,
      description: pastTasks[i].description,
      status: currentChallenge.tasksStatus[i]
    });
  }

  return result;
};
