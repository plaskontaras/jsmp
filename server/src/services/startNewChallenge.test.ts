import { tasks } from '../mockdata/tasks.json';
import { allAchievements } from '../mockdata/achivements.json';
import { ActualAchievement, Challenge } from '../types/interfaces';
import { startNewChallenge } from './startNewChallenge';

const achievementsList: ActualAchievement[] = [];

for (let i = 0; i < allAchievements.length; i++) {
  achievementsList[i] = {
    itemId: allAchievements[i].itemId,
    description: allAchievements[i].description,
    image: allAchievements[i].image,
    status: {
      state: 'Pending',
      updated: new Date().getTime()
    }
  };
}

describe('startNewChallenge: ', () => {
  let challenge1: Challenge;
  let challenge2: Challenge;

  beforeEach(() => {
    challenge1 = startNewChallenge(tasks, achievementsList);
    challenge2 = startNewChallenge(tasks, achievementsList, 21);
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
