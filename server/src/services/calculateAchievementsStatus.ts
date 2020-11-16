import { CalculateAchievementsStatus } from '../types/interfaces';
import { loadAchievements } from '../mockdata/checkComplete';
const achievements = loadAchievements();

export const calculateAchievementsStatus: CalculateAchievementsStatus = (
  achievements,
  tasksStatus
) => {
  const statuses = new Map();

  achievements.forEach((achievement) => {
    statuses.set(achievement.itemId, tasksStatus);
  });

  // statuses.set(2, { state: 'Pending', updated: Date.now() })
  // statuses.set(4, { state: 'Pending', updated: Date.now() })
  return statuses;
  // return { 2: { state: 'Pending', updated: Date.now() }, 4: { state: 'Pending', updated: Date.now() } }
};
