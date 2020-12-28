import { Challenge } from './../../types/interfaces';

export function getCurrentChallenge(
  challengeId: number,
  challenges: Challenge[]
) {
  const currentChallenge = challenges.find(
    (i) => i.challengeId === challengeId
  );

  if (!currentChallenge) {
    throw new Error('required challenge does not exsit!');
  }

  return currentChallenge;
}
