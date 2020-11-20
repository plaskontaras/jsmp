import { GetAchievements } from './../types/interfaces';
import { allAchievements } from '../mockdata/achivements.json';

const allAchievementsList = allAchievements;

export const getAchievements: GetAchievements = (
  challengeId: number,
  challenges
) => {
  const currentChallenge = challenges.find(
    (i) => i.challengeId === challengeId
  );

  if (!currentChallenge) {
    throw new Error('required challenge does not exsit!');
  }

  const result = [];

  const achievementsStatus = currentChallenge.achievementsStatus;

  for (const achievement in achievementsStatus) {
    const CurrentAchievementStatus = {
      state: achievementsStatus[achievement].state,
      updated: achievementsStatus[achievement].updated
    };

    const currentAchievement = allAchievementsList.find(
      (a) => a.itemId === +achievement
    );

    if (currentAchievement) {
      const actualAchievement = {
        itemId: currentAchievement.itemId,
        description: currentAchievement.description,
        image: currentAchievement.image,
        status: CurrentAchievementStatus
      };

      result.push(actualAchievement);
    }
  }

  return result;
};
