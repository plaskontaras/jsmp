import { ActualTask, GetCurrentTask } from '../types/interfaces';
import { getCurrentChallenge } from './helpers/getCurrentChallenge';

export const getCurrentTask: GetCurrentTask = (challengeId, challenges) => {
  const currentChallenge = getCurrentChallenge(challengeId, challenges);

  const actualTaskNumber =
    new Date().getDate() - new Date(currentChallenge.startDate).getDate();
  const actualTaskId = currentChallenge.tasksOrder[actualTaskNumber].id;

  const result: ActualTask = {
    ...currentChallenge.tasksOrder[actualTaskNumber],
    status: currentChallenge.tasksStatus[actualTaskId]
  };

  return result;
};
