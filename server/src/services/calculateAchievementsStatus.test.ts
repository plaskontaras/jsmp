import { calculateAchievementsStatus } from './calculateAchievementsStatus';
import { challenges } from '../mockdata/challenges';
import { loadAchievements } from '../mockdata/checkComplete';

const achievements = loadAchievements();

const challenge3 = challenges[3];
const tasksStatus3 = challenge3.tasksStatus;

describe('calculateAchievementsStatus: ', () => {
  test('should return warning if challenge with required id does not exist', () => {
    expect(() => {
      calculateAchievementsStatus(
        20151,
        challenges,
        achievements,
        tasksStatus3
      );
    }).toThrow('required challenge does not exsit!');
  });

  test('should retutn "Success" to achievement "Complete 4 Monday\'s tasks"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(0);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });

  test('should retutn "Success" to achievement "Complete each task 7 days in a row"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(1);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });

  test('should retutn "Success" to achievement "Complete five tasks before 8:00 AM"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(2);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });

  test('should retutn "Success" to achievement "Complete seven tasks before 9:00 AM"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(3);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });

  test('should retutn "Success" to achievement "Complete 4 Sunday\'s tasks"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(4);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });

  test('should retutn "Success" to achievement "Complete half of the tasks"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(5);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });

  test('should retutn "Success" to achievement "Complete all tasks"', () => {
    const actual = calculateAchievementsStatus(
      3,
      challenges,
      achievements,
      tasksStatus3
    ).get(6);
    const expected = 'Success';

    expect(actual).toBe(expected);
  });
});
