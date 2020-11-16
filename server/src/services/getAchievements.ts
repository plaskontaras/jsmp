import { ActualAchievement } from './../types/interfaces';
import { GetAchievements } from '../types/interfaces';
import { loadAchievements } from '../mockdata/checkComplete';

const actualaAchievementsList = loadAchievements();

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

  const result: ActualAchievement[] = [];

  const achievementsStatus = currentChallenge.achievementsStatus;

  for (const achievement in achievementsStatus) {
    const status = achievementsStatus[achievement];

    const currentAchievement = actualaAchievementsList.find(
      (i) => i.itemId === +achievement
    );

    if (currentAchievement) {
      const x = {
        itemId: currentAchievement.itemId,
        description: currentAchievement.description,
        image: currentAchievement.image,
        status
      };

      result.push(x);
    } else {
      throw new Error('fail');
    }
  }

  return result;
};
