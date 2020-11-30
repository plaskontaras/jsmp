import { getRandomInteger } from './getRandomInteger';

export function getShuffledArray<T>(array: T[], numberOfElements: number): T[] {
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
