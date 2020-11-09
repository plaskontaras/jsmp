import {
  ActualAchievement,
  ArchiveItem,
  Status
} from './../typesdefinition/interfaces';
import { Challenge } from '../typesdefinition/interfaces';
import {
  getCurrentTask,
  getTaskArchive,
  startNewChallenge
} from '../typesdefinition/services';
import { ChallengeState, ItemState } from '../typesdefinition/enums';
import { tasks } from '../mockdata/tasks.json';
import { achievementsList } from '../mockdata/achivements.json';

const challenges: Challenge[] = [
  {
    id: 0,
    state: ChallengeState.INPROGRESS,
    startDate: new Date(
      `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
        new Date().getDate() - 3
      }`
    ).getTime(),
    tasksOrder: tasks,
    tasksStatus: [
      {
        state: ItemState.SUCCESS,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      }
    ],
    achievementsStatus: [
      {
        state: ItemState.SUCCESS,
        updated: new Date(
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`
        ).getTime()
      },
      {
        state: ItemState.PENDING,
        updated: new Date(
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`
        ).getTime()
      }
    ]
  },
  {
    id: 1,
    state: ChallengeState.INPROGRESS,
    startDate: new Date().getTime(),
    tasksOrder: tasks.slice(0, 30),
    tasksStatus: [
      { state: ItemState.SUCCESS, updated: new Date().getHours() },
      { state: ItemState.SUCCESS, updated: new Date().getTime() },
      { state: ItemState.SUCCESS, updated: new Date().getTime() },
      { state: ItemState.SUCCESS, updated: new Date().getTime() },
      { state: ItemState.SUCCESS, updated: new Date().getTime() },
      { state: ItemState.PENDING, updated: new Date().getTime() },
      { state: ItemState.PENDING, updated: new Date().getTime() }
    ],
    achievementsStatus: [
      { state: ItemState.SUCCESS, updated: new Date().getHours() },
      { state: ItemState.SUCCESS, updated: new Date().getTime() },
      { state: ItemState.PENDING, updated: new Date().getTime() },
      { state: ItemState.PENDING, updated: new Date().getTime() },
      { state: ItemState.PENDING, updated: new Date().getTime() }
    ]
  }
];

describe('getCurrentTask: ', () => {
  test('should return warning if challenge with required id does not exist', () => {
    const expected = 'Challenge with this id does not exist!';
    const actual = getCurrentTask(4, challenges);

    expect(actual).toEqual(expected);
  });

  test('return first task from tasksOrder array if challenge has started today', () => {
    const expected = {
      id: 16160,
      description: 'Go to bed before 11:00 PM',
      state: {
        state: 'Success',
        updated: new Date().getHours()
      }
    };
    const actual = getCurrentTask(1, challenges);

    expect(actual).toEqual(expected);
  });

  test('should always return tasks[3] from challenge[0]', () => {
    const expected = {
      id: 3235,
      description: 'Make a small present for your friend without a reason',
      state: {
        state: 'Pending',
        updated: new Date(
          `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 3
          }`
        ).getTime()
      }
    };

    const actual = getCurrentTask(0, challenges);

    expect(actual).toEqual(expected);
  });
});

describe('getTaskArchive: ', () => {
  test('should return warning if challenge with required id does not exist', () => {
    const expected = 'Challenge with this id does not exist!';
    const actual = getTaskArchive(4, challenges);

    expect(actual).toEqual(expected);
  });

  test('should always return 4 tasks with statuses from challenge[0]', () => {
    const expected: ArchiveItem[] = [
      {
        id: 16160,
        description: 'Go to bed before 11:00 PM',
        status: {
          state: ItemState.SUCCESS,
          updated: new Date(
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
              new Date().getDate() - 3
            }`
          ).getTime()
        }
      },
      {
        id: 6161,
        description:
          'Become a patron for a creator you like on patreon.com or a similar service',
        status: {
          state: ItemState.PENDING,
          updated: new Date(
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
              new Date().getDate() - 3
            }`
          ).getTime()
        }
      },
      {
        id: 2666,
        description: 'Take a picture of a sunset',
        status: {
          state: ItemState.PENDING,
          updated: new Date(
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
              new Date().getDate() - 3
            }`
          ).getTime()
        }
      },
      {
        id: 3235,
        description: 'Make a small present for your friend without a reason',
        status: {
          state: ItemState.PENDING,
          updated: new Date(
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
              new Date().getDate() - 3
            }`
          ).getTime()
        }
      }
    ];

    const actual = getTaskArchive(0, challenges);
    if (typeof actual === 'object') {
      expect(actual[0].status).toEqual(expected[0].status);
      expect(actual[0].id).toBe(expected[0].id);
      expect(actual[0].description).toBe(expected[0].description);
    }
  });
});

describe('startNewChallenge: ', () => {
  test('challenges length should be incremented by 1', () => {
    const expected = 3;
    const actual = startNewChallenge(tasks, challenges, 30, 5);

    expect(challenges.length).toBe(expected);
  });

  test('tasksList length must be equal to challengeDuration', () => {
    const expected = 30;
    const actual = startNewChallenge(tasks, challenges, 30, 5);

    expect(actual.tasksOrder.length).toBe(expected);
  });

  test('achievementsStatus length must be equal to challengeDuration by default', () => {
    const expected = Math.floor(28 / 6);
    const actual = startNewChallenge(tasks, challenges, 28);

    expect(actual.achievementsStatus.length).toBe(expected);
  });

  test('startDate should be equal today', () => {
    const expected = new Date().getDate();
    const actual = startNewChallenge(tasks, challenges, 30, 5);

    expect(new Date(actual.startDate).getDate()).toBe(expected);
  });
});
