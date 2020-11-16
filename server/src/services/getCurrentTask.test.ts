import { Challenge } from './../types/interfaces';
import { challenges } from './../mockdata/challenges';
import { getCurrentTask } from './getCurrentTask';
import { tasks } from '../mockdata/tasks.json';

describe('getCurrentTask: ', () => {
  test('should return task with description: "FakeTask" if required challengeId does not exist in challenges list', () => {
    const actual = getCurrentTask(5, challenges).description;

    expect(actual).toEqual('FakeTask');
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
