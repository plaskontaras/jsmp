import { ActualAchievement } from '../../types/interfaces';

export function generateActualAchievementsList(allAchievements: any) {
  const achievementsList: ActualAchievement[] = [];

  for (let i = 0; i < allAchievements.length; i++) {
    achievementsList[i] = {
      id: allAchievements[i].id,
      description: allAchievements[i].description,
      image: allAchievements[i].image,
      status: {
        state: 'Pending',
        updated: new Date().getTime()
      }
    };
  }

  return achievementsList;
}
