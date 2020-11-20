import { challenges } from './../mockdata/challenges';
import { getCurrentTask } from './getCurrentTask';
import { tasks } from '../mockdata/tasks.json';

describe('getCurrentTask: ', () => {
  test('should return Error with message "required challenge does not exsit!" if required challengeId does not exist in challenges list', () => {
    expect(() => {
      getCurrentTask(5151515, challenges);
    }).toThrow('required challenge does not exsit!');
  });

  test('should return first task from challenge started today(challenges[0])', () => {
    const actual = getCurrentTask(0, challenges).itemId;
    const expected = tasks[0].itemId;

    expect(actual).toBe(expected);
  });

  test('should return third task from challenge started three days ago(challenges[1])', () => {
    const actual = getCurrentTask(1, challenges).itemId;
    const expected = tasks[3].itemId;

    expect(actual).toBe(expected);
  });
});
