import { getTaskArchive } from './getTaskArchive';
import { challenges } from './../mockdata/challenges';

describe('getAchievements:', () => {
  test('should return Error with message "required challenge does not exsit!" if required challengeId does not exist in challenges list', () => {
    expect(() => {
      getTaskArchive(4, challenges);
    }).toThrow('required challenge does not exsit!');
  });

  test('should return expected amount of past tasks for challenge started three days ago', () => {
    const actual = getTaskArchive(2, challenges).length;
    const expected = 3;

    expect(actual).toBe(expected);
  });
});
