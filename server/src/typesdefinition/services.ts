import { ItemState, ChallengeState } from './enums';
import { Task, Challenge } from './interfaces';
import { ActualTask } from './interfaces';
import { Achievement } from './interfaces';
import { ActualAchievement } from './interfaces';
import { ArchiveItem } from './interfaces';
import { Status } from './interfaces';
import { achievementsList } from '../mockdata/achivements.json';

const checkComplete = (tasksStatus: Status[]) => ItemState;

/**
 *
 * @param id - id of current challenge
 *
 * @returns Returns a current task with its status by the challenge id
 */
// type GetCurrentTask = (id: number) => ActualTask;
export const getCurrentTask = (
  id: number,
  challenges: Challenge[]
): ActualTask | string => {
  let result: any = {};
  const currentChallenge = challenges.find((i) => i.id === id);
  if (!currentChallenge) return 'Challenge with this id does not exist!';

  const actualTaskNumber =
    new Date().getDate() - new Date(currentChallenge?.startDate).getDate();

  result = currentChallenge.tasksOrder[actualTaskNumber];
  result.state = currentChallenge.tasksStatus[actualTaskNumber];

  return result;
};

/**
 *
 * @param id - id of current challenge
 *
 * @returns Returns a list of actual achievements by the challenge id
 */
type getAchievements = (id: number) => ActualAchievement[];
// export const getAchievements = (id: number, challenges: Challenge[]): ActualAchievement[] | string => {

// const checkComplete = (tasksStatus: Status[]) => ItemState;

// const currentChallenge = challenges.find(i => i.id === id);

// if (!currentChallenge) return 'Challenge with this id does not exist!';

// const actualTaskNumber = (new Date()).getDate() - new Date(currentChallenge?.startDate).getDate();
// const finishedTasks: Task[] = currentChallenge.tasksOrder.slice(0, actualTaskNumber);

// const result: ActualAchievement[] = currentChallenge.tasksStatus.map( i => { // i  - { state: ItemState; updated: number; }
//   if (checkComplete(i)) {

//   }
// })

// return result;
// }

/**
 *
 * @param id - id of current challenge
 *
 * @returns Returns all past tasks with their results by the challenge id
 */
// type GetTaskArchive = (id: number) => ArchiveItem[];
export const getTaskArchive = (
  id: number,
  challenges: Challenge[]
): ArchiveItem[] | string => {
  const currentChallenge = challenges.find((i) => i.id === id);
  if (!currentChallenge) return 'Challenge with this id does not exist!';

  const actualTaskNumber =
    new Date().getDate() - new Date(currentChallenge?.startDate).getDate();

  const finishedTasks = currentChallenge.tasksOrder.slice(0, actualTaskNumber);
  const finishedTasksStatus = currentChallenge.tasksStatus.slice(
    0,
    actualTaskNumber
  );

  const result: ArchiveItem[] = [];

  for (let i = 0; i < finishedTasks.length; i++) {
    result.push({
      id: finishedTasks[i].id,
      description: finishedTasks[i].description,
      status: {
        state: finishedTasksStatus[i].state,
        updated: finishedTasksStatus[i].updated
      }
    });
  }

  return result;
};

/**
 * 
 * @param tasksList - a list of tasks
 * @param challengesList - a list of challenges
 * @param challengeDuration - challenge duration that by default should be 30 days
 * @param achievementsNumber - number of achievements that by default should be challenge duration / 6
 * 
 * @returns Returns a new challenge using the following
parameters: a list of tasks, a list of challenges,
challenge duration that by default should be 30
days, number of achievements – by default,
challenge duration / 6 
 */
// type StartNewChallenge = (
//   tasksList: Task[],
//   challengesList: Challenge[],
//   challengeDuration?: number,
//   achievementsNumber?: number
// ) => Challenge;

export const startNewChallenge = (
  tasksList: Task[],
  challengesList: Challenge[],
  challengeDuration = 30,
  achievementsNumber: number = Math.floor(challengeDuration / 6)
): Challenge => {
  const startDate = new Date().getTime();

  const id = challengesList.length;

  const tasksOrder = tasksList
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, challengeDuration);

  const tasksStatus: Status[] = tasksList.map((i) => ({
    state: ItemState.PENDING,
    updated: new Date().getTime()
  }));

  const achievements = achievementsList
    .filter(
      (i) =>
        i.description !== 'Complete all tasks' &&
        i.description !== 'Complete half of the tasks'
    )
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, achievementsNumber - 2);

  const achievementsStatus = achievementsList
    .filter(
      (i) =>
        i.description !== 'Complete all tasks' &&
        i.description !== 'Complete half of the tasks'
    )
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, achievementsNumber - 2)
    .map((i) => ({ state: ItemState.SUCCESS, updated: new Date().getTime() })); // why we should return Status[]? why we map and filter?

  achievements.push({
    id: 1,
    description: 'Complete half of the tasks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK0iOiaEUaQzAsyagPoDxMDPn3bsBS0w5jWA&usqp=CAU',
    checkComplete: 'Pending',
    status: {
      state: ItemState.PENDING,
      updated: new Date().getTime()
    }
  });

  achievements.push({
    id: 2,
    description: 'Complete all tasks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVtqF0pb1fYP4Vgm5AWuu3k-JAaQhHVJsG2w&usqp=CAU',
    checkComplete: 'Pending',
    status: {
      state: ItemState.PENDING,
      updated: new Date().getTime()
    }
  });

  achievementsStatus.push({
    state: ItemState.SUCCESS,
    updated: new Date().getTime()
  });
  achievementsStatus.push({
    state: ItemState.SUCCESS,
    updated: new Date().getTime()
  });

  checkComplete(tasksStatus);

  const result = {
    id,
    state: ChallengeState.INPROGRESS,
    startDate,
    tasksOrder,
    tasksStatus,
    achievementsStatus: achievementsStatus
    // achievements
  };

  challengesList.push(result);

  return result;
};

/**
 * Returns achievements statusfor the challenge by its achievements listand tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */
type CalculateAchievementsStatus = (
  achievements: Achievement[],
  tasksStatus: Status
) => Map<number, Status>;
