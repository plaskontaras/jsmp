import { ActualTask, GetCurrentTask } from '../types/interfaces';

export const getCurrentTask: GetCurrentTask = (challengeId, challenges) => {
  const currentChallenge = challenges.find(
    (i) => i.challengeId === challengeId
  );

  if (!currentChallenge) {
    throw new Error('required challenge does not exsit!');
  }

  const actualTaskNumber =
    new Date().getDate() - new Date(currentChallenge.startDate).getDate();

  const result: ActualTask = {
    ...currentChallenge.tasksOrder[actualTaskNumber],
    status: currentChallenge.tasksStatus[actualTaskNumber]
  };

  return result;
};
