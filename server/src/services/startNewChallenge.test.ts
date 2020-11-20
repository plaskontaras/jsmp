import { tasks } from '../mockDB/tasks.json';
import { allAchievements } from '../mockDB/achivements.json';
import { ActualAchievement, Challenge } from '../types/interfaces';
import { startNewChallenge } from './startNewChallenge';
import { generateActualAchievementsList } from './helpers/generateActualAchievementsList';

const achievementsList: ActualAchievement[] = generateActualAchievementsList(
  allAchievements
);

describe('startNewChallenge: ', () => {
  let challenge1: Challenge;

  beforeEach(() => {
    challenge1 = startNewChallenge(tasks, achievementsList);
  });

  test('the challenge start date should be set for today’s date', () => {
    const actualTasksAmount = challenge1.startDate.getDate();
    const expectedTasksAmount = new Date().getDate();

    expect(actualTasksAmount).toBe(expectedTasksAmount);
  });

  test("state of challenge should be 'In Progress'", () => {
    const actualTasksAmount = challenge1.challengeState;
    const expectedTasksAmount = 'In Progress';

    expect(actualTasksAmount).toBe(expectedTasksAmount);
  });

  test('amount of tasks should be equal to challenge duration', () => {
    const actualTasksAmount = challenge1.tasksOrder.length;
    const expectedTasksAmount = 30;

    expect(actualTasksAmount).toBe(expectedTasksAmount);
  });

  test('tasksOrder should be randomly picked and shuffled', () => {
    const actualTasksAmount = challenge1.tasksOrder;
    const expectedTasksAmount = tasks.slice(0, 30);

    expect(actualTasksAmount).not.toEqual(expectedTasksAmount);
  });

  test('amount of achievements should be equal to integer of challenge duration dividing by 6', () => {
    const actualAchievementsAmount = Object.keys(challenge1.achievementsStatus)
      .length;
    const expectedAchievementsAmount = 5;

    expect(actualAchievementsAmount).toBe(expectedAchievementsAmount);
  });

  test('challenge should contain achievement “Complete half of the tasks”', () => {
    const actualTasksAmount = Object.prototype.hasOwnProperty.call(
      challenge1.achievementsStatus,
      1
    );

    expect(actualTasksAmount).toBe(true);
  });

  test('challenge should contain achievement “Complete all tasks”', () => {
    const actualTasksAmount = Object.prototype.hasOwnProperty.call(
      challenge1.achievementsStatus,
      0
    );

    expect(actualTasksAmount).toBe(true);
  });

  test('tasksOrder length should be equal to tasksStatus fields number', () => {
    const actualTasksAmount = challenge1.tasksOrder.length;
    const expectedTasksAmount = Object.keys(challenge1.tasksStatus).length;

    expect(actualTasksAmount).toBe(expectedTasksAmount);
  });
});
