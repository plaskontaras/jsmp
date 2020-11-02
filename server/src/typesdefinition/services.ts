import { Task } from './interfaces';
import { ActualTask } from './interfaces';
import { Achievement } from './interfaces';
import { ActualAchievement } from './interfaces';
import { ArchiveItem } from './interfaces';
import { Challenge } from './interfaces';
import { Status } from './interfaces';

/**
 *
 * @param id - id of current challenge
 *
 * @returns Returns a current task with its status by the challenge id
 */
type GetCurrentTask = (id: number) => ActualTask;

/**
 *
 * @param id - id of current challenge
 *
 * @returns Returns a list of actual achievements by the challenge id
 */
type getAchievements = (id: number) => ActualAchievement[];

/**
 *
 * @param id - id of current challenge
 *
 * @returns Returns all past tasks with their results by the challenge id
 */
type GetTaskArchive = (id: number) => ArchiveItem[];

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
type StartNewChallenge = (
  tasksList: Task[],
  challengesList: Challenge[],
  challengeDuration?: number,
  achievementsNumber?: number
) => Challenge;

/**
 * Returns achievements statusfor the challenge by its achievements listand tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */
type CalculateAchievementsStatus = (
  achievements: Achievement[],
  tasksStatus: Status
) => Status; // =>
