import { ActualTask, Challenge, GetTaskArchive } from '../types/interfaces';
import { getCurrentChallenge } from './helpers/getCurrentChallenge';

export const getTaskArchive: GetTaskArchive = (
  id: number,
  challenges: Challenge[]
) => {
  const currentChallenge = getCurrentChallenge(id, challenges);
  const result = [];
  const tasksStatus = currentChallenge.tasksStatus;
  const currentDate = new Date().getDate();

  for (const key in tasksStatus) {
    if (
      tasksStatus[key].state === 'Success' ||
      tasksStatus[key].state === 'Failure'
    ) {
      const status = tasksStatus[key];
      const id = currentChallenge.tasksOrder.find((t) => t.id === +key)!.id;
      const description = currentChallenge.tasksOrder.find(
        (t) => t.id === +key
      )!.description;

      const passedTask: ActualTask = { status, id, description };

      result.push(passedTask);
    }
  }

  return result;
};
