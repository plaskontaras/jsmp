import { challenges } from './../mockdata/challenges';
import { getAchievements } from './getAchievements';
import { actualAchievementsList } from '../mockdata/achivements.json';
import { ActualAchievement } from '../types/interfaces';

describe('getAchievements:', () => {
  test('should return Error with message "required challenge does not exsit!" if required challengeId does not exist in challenges list', () => {
    expect(() => {
      getAchievements(4, challenges);
    }).toThrow('required challenge does not exsit!');
  });

  test('achievements length should be equal to achievementsStatus fields amount and also it is 5', () => {
    const actual = getAchievements(0, challenges).length;
    const expected = Object.keys(challenges[0].achievementsStatus).length;

    expect(actual).toBe(expected);
    expect(actual).toBe(5);
  });

  test('achievements statuses should be changed', () => {
    const actual = getAchievements(0, challenges)[0].status;
    const expected = challenges[2].achievementsStatus[0];

    expect(actual).not.toEqual(expected);
  });
});
