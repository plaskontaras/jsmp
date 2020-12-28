import { GetAchievements } from './../types/interfaces';
import { allAchievements } from '../mockDB/achivements.json';
import { getCurrentChallenge } from './helpers/getCurrentChallenge';

export const getAchievements: GetAchievements = (challengeId, challenges) => {
  const currentChallenge = getCurrentChallenge(challengeId, challenges);
  const result = [];
  const achievementsStatus = currentChallenge.achievementsStatus;

  for (const achievement in achievementsStatus) {
    const CurrentAchievementStatus = {
      state: achievementsStatus[achievement].state,
      updated: Math.round(achievementsStatus[achievement].updated / 1000)
    };

    const currentAchievement = allAchievements.find(
      (a) => a.id === +achievement
    );

    if (currentAchievement) {
      const actualAchievement = {
        id: currentAchievement.id,
        description: currentAchievement.description,
        image: currentAchievement.image,
        status: CurrentAchievementStatus
      };

      result.push(actualAchievement);
    }
  }

  return result;
};
