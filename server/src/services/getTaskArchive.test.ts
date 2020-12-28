import { Challenge } from './../types/interfaces';
import { getTaskArchive } from './getTaskArchive';
import { tasks } from '../mockDB/tasks.json';

describe('getAchievements:', () => {
  const threeDaysAgoStartDate = Date.now() - +new Date(3 * 24 * 3600 * 1000);
  const threeDaysAgoStartedChallenge: Challenge[] = [
    {
      challengeId: 2,
      challengeState: 'In Progress',
      startDate: new Date(threeDaysAgoStartDate),
      tasksOrder: tasks.slice(0, 30),
      tasksStatus: {},
      achievementsStatus: {}
    }
  ];

  test('should return Error with message "required challenge does not exsit!" if required challengeId does not exist in challenges list', () => {
    expect(() => {
      getTaskArchive(415116, threeDaysAgoStartedChallenge);
    }).toThrow('required challenge does not exsit!');
  });

  test('should return expected amount of past tasks for challenge started three days ago', () => {
    const expected = 0;

    expect(getTaskArchive(2, threeDaysAgoStartedChallenge).length).toBe(
      expected
    );
  });
});
