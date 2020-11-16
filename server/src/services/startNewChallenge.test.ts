import { tasks } from '../mockdata/tasks.json';
import { actualAchievementsList } from '../mockdata/achivements.json';
import { ItemState } from '../types/interfaces';
import { ActualAchievement, Challenge } from '../types/interfaces';
import { startNewChallenge } from './startNewChallenge';

const actualaAchievementsList: ActualAchievement[] = [
  {
    itemId: 0,
    description: "Complete 4 Monday's tasks",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk0VIWYGwdt6MzzTaHv3rseEa1OU8q8VxjLA&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  },
  {
    itemId: 1,
    description: 'Complete each task 7 days in a row',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrEV9De3KxSYy2Dmm2owJ2mGQcI4kyR_Hmbw&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  },
  {
    itemId: 2,
    description: 'Complete five tasks before 8:00 AM',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  },
  {
    itemId: 3,
    description: 'Complete seven tasks before 9:00 AM',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  },
  {
    itemId: 4,
    description: 'Complete fifteen tasks before 10:00 AM',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  },
  {
    itemId: 5,
    description: 'Complete half of the tasks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK0iOiaEUaQzAsyagPoDxMDPn3bsBS0w5jWA&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  },
  {
    itemId: 6,
    description: 'Complete all tasks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVtqF0pb1fYP4Vgm5AWuu3k-JAaQhHVJsG2w&usqp=CAU',
    status: {
      state: 'Pending',
      updated: 1415151515
    }
  }
];

describe('startNewChallenge: ', () => {
  let challenge1: Challenge;
  let challenge2: Challenge;

  beforeEach(() => {
    challenge1 = startNewChallenge(tasks, actualaAchievementsList);
    challenge2 = startNewChallenge(tasks, actualaAchievementsList, 21);
  });

  test('the challenge start date should be set for today’s date', () => {
    const actualTasksAmount = challenge1.startDate.getDate();
    const expectedTasksAmount = new Date().getDate();

    const actualTasksAmount2 = challenge1.startDate.getDate();
    const expectedTasksAmount2 = new Date().getDate();

    expect(actualTasksAmount).toBe(expectedTasksAmount);
    expect(actualTasksAmount2).toBe(expectedTasksAmount2);
  });

  test("state of challenge should be 'In Progress'", () => {
    const actualTasksAmount = challenge1.challengeState;
    const expectedTasksAmount = 'In Progress';

    const actualTasksAmount2 = challenge1.challengeState;
    const expectedTasksAmount2 = 'In Progress';

    expect(actualTasksAmount).toBe(expectedTasksAmount);
    expect(actualTasksAmount2).toBe(expectedTasksAmount2);
  });

  test('amount of tasks should be equal to challenge duration', () => {
    const actualTasksAmount = challenge1.tasksOrder.length;
    const expectedTasksAmount = 30;

    const actualTasksAmount2 = challenge2.tasksOrder.length;
    const expectedTasksAmount2 = 21;

    expect(actualTasksAmount).toBe(expectedTasksAmount);
    expect(actualTasksAmount2).toBe(expectedTasksAmount2);
  });

  test('tasksOrder should be randomly picked and shuffled', () => {
    const actualTasksAmount = challenge1.tasksOrder;
    const expectedTasksAmount = tasks.slice(0, 30);

    const actualTasksAmount2 = challenge2.tasksOrder;
    const expectedTasksAmount2 = tasks.slice(0, 30);

    expect(actualTasksAmount).not.toEqual(expectedTasksAmount);
    expect(actualTasksAmount2).not.toEqual(expectedTasksAmount2);
  });

  test('amount of achievements should be equal to integer of challenge duration dividing by 6', () => {
    const actualAchievementsAmount = Object.keys(challenge1.achievementsStatus)
      .length;
    const expectedAchievementsAmount = 5;

    const actualAchievementsAmount2 = Object.keys(challenge2.achievementsStatus)
      .length;
    const expectedAchievementsAmount2 = 3;

    expect(actualAchievementsAmount).toBe(expectedAchievementsAmount);
    expect(actualAchievementsAmount2).toBe(expectedAchievementsAmount2);
  });

  // test('achievements should be randomly picked from a list of all achievements', () => {
  // const actualTasksAmount = Object.keys(challenge1.achievementsStatus);
  // const expectedTasksAmount = 21;

  // const actualTasksAmount2 = Object.keys(challenge2.achievementsStatus).length;
  // const expectedTasksAmount2 = Object.keys(challenge2.achievementsStatus).length;

  // expect(actualTasksAmount).toEqual(expectedTasksAmount);
  // expect(actualTasksAmount2).toEqual(expectedTasksAmount2);
  // });

  test('challenge should contain achievement “Complete half of the tasks”', () => {
    const actualTasksAmount = Object.prototype.hasOwnProperty.call(
      challenge1.achievementsStatus,
      5
    );
    const actualTasksAmount2 = Object.prototype.hasOwnProperty.call(
      challenge2.achievementsStatus,
      5
    );

    expect(actualTasksAmount).toBe(true);
    expect(actualTasksAmount2).toBe(true);
  });

  test('challenge should contain achievement “Complete all tasks”', () => {
    const actualTasksAmount = Object.prototype.hasOwnProperty.call(
      challenge1.achievementsStatus,
      6
    );
    const actualTasksAmount2 = Object.prototype.hasOwnProperty.call(
      challenge2.achievementsStatus,
      6
    );

    expect(actualTasksAmount).toBe(true);
    expect(actualTasksAmount2).toBe(true);
  });

  test('tasksOrder length should be equal to tasksStatus fields number', () => {
    const actualTasksAmount = challenge1.tasksOrder.length;
    const expectedTasksAmount = Object.keys(challenge1.tasksStatus).length;

    const actualTasksAmount2 = challenge2.tasksOrder.length;
    const expectedTasksAmount2 = Object.keys(challenge2.tasksStatus).length;

    expect(actualTasksAmount).toBe(expectedTasksAmount);
    expect(actualTasksAmount2).toBe(expectedTasksAmount2);
  });
});
