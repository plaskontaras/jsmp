import { getCurrentTask } from './getCurrentTask';
import { tasks } from '../mockDB/tasks.json';
import { Challenge } from '../types/interfaces';

describe('getCurrentTask: ', () => {
  const threeDaysAgoStartDate = Date.now() - +new Date(3 * 24 * 3600 * 1000);
  const challengeStartedThreeDaysAgo: Challenge[] = [
    {
      challengeId: 1,
      challengeState: 'In Progress',
      startDate: new Date(threeDaysAgoStartDate),
      tasksOrder: tasks.slice(0, 30),
      tasksStatus: { 3235: { state: 'Pending', updated: 141151 } },
      achievementsStatus: {}
    }
  ];

  test('should return Error with message "required challenge does not exsit!" if required challengeId does not exist in challenges list', () => {
    expect(() => {
      getCurrentTask(42, challengeStartedThreeDaysAgo);
    }).toThrow('required challenge does not exsit!');
  });

  test('return fourth task from challenge started three days ago)', () => {
    const expected = {
      id: 3235,
      description: 'Make a small present for your friend without a reason',
      status: {
        state: 'Pending',
        updated: 141151
      }
    };

    expect(getCurrentTask(1, challengeStartedThreeDaysAgo)).toEqual(expected);
  });
});
