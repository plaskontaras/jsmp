import { GetTaskArchive } from '../types/interfaces';
import { getCurrentChallenge } from './helpers/getCurrentChallenge';

export const getTaskArchive: GetTaskArchive = (id, challenges) => {
  const currentChallenge = getCurrentChallenge(id, challenges);
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
      id: pastTasks[i].id,
      description: pastTasks[i].description,
      status: { ...currentChallenge.tasksStatus[pastTasks[i].id] }
    });
  }

  return result;
};
