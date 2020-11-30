import { getAchievements } from './getAchievements';
import { allAchievements } from '../mockDB/achivements.json';
import { tasks } from '../mockDB/tasks.json';
import { Challenge, Status } from './../types/interfaces';

const tasksStatus: Record<number, Status> = tasks
  .slice(0, 30)
  .reduce(function (acc: any, cur) {
    const ids = cur.id;
    acc[ids] = { state: 'Pending', updated: new Date() };
    return acc;
  }, {});

const achievementsStatus: Record<number, Status> = allAchievements
  .slice(0, 5)
  .reduce(function (acc: any, cur) {
    const ids = cur.id;
    acc[ids] = { state: 'Pending', updated: new Date() };
    return acc;
  }, {});

const challengeWithFiveAchievemnts: Challenge[] = [
  {
    challengeId: 0,
    challengeState: 'In Progress',
    startDate: new Date(),
    tasksOrder: tasks.slice(0, 30),
    tasksStatus,
    achievementsStatus
  }
];

describe('getAchievements:', () => {
  test('should return Error with message "required challenge does not exsit!" if required challengeId does not exist in challenges list', () => {
    expect(() => {
      getAchievements(415151, challengeWithFiveAchievemnts);
    }).toThrow('required challenge does not exsit!');
  });

  test('achievements length should be equal to achievementsStatus fields amount and also it is 5', () => {
    const expected = {
      0: {
        description: 'Complete all tasks',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk0VIWYGwdt6MzzTaHv3rseEa1OU8q8VxjLA&usqp=CAU',
        status: {
          state: 'Pending',
          updated: new Date()
        }
      },
      1: {
        description: 'Complete half of the tasks',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrEV9De3KxSYy2Dmm2owJ2mGQcI4kyR_Hmbw&usqp=CAU',
        status: {
          state: 'Pending',
          updated: new Date()
        }
      },
      2: {
        description: 'Complete five tasks before 8:00 AM',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
        status: {
          state: 'Pending',
          updated: new Date()
        }
      },
      3: {
        description: 'Complete seven tasks before 9:00 AM',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
        status: {
          state: 'Pending',
          updated: new Date()
        }
      },
      4: {
        description: "Complete 4 Sunday's tasks",
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
        status: {
          state: 'Pending',
          updated: new Date()
        }
      },
      5: {
        description: 'Complete each task 7 days in a row',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK0iOiaEUaQzAsyagPoDxMDPn3bsBS0w5jWA&usqp=CAU',
        status: {
          state: 'Pending',
          updated: new Date()
        }
      }
    };

    expect(
      getAchievements(0, challengeWithFiveAchievemnts)[0].description
    ).toBe(expected[0].description);
    expect(getAchievements(0, challengeWithFiveAchievemnts)[0].image).toBe(
      expected[0].image
    );
    expect(
      getAchievements(0, challengeWithFiveAchievemnts)[0].status.state
    ).toBe(expected[0].status.state);
    expect(
      getAchievements(0, challengeWithFiveAchievemnts)[0].description
    ).toBe(expected[0].description);
  });
});
