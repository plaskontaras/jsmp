/**
 * Challenge state - can be: In Progress,
Success, Failure
 */
export type ChallengeState = 'In Progress' | 'Success' | 'Failure';

/**
 * ItemState describes a state of
some item (a task or an
achievement)
 */
export type ItemState = 'Pending' | 'Success' | 'Failure';

/**
 * Task describes a single action
that should be done by the user. For example: “Go for a 10
minutes run” or “Go to bed before 11:00 PM”
*/
export interface Task {
  itemId: number;
  description: string;
}

/**
 * A method in Achievement that can return an achievement status by tasks status.
 */
export type CheckComplete = (tasksStatus: Record<number, Status>) => ItemState;
// export type CheckComplete = (tasksStatus: Status[]) => ItemState;

/**
 * Achievement describes a set of
several tasks accomplished in
the specific way. For example:
“Complete each task 7 days in
a row” or “Complete 5 tasks
before 8:00 AM”
@param checkComplete - a method that can return an achievement status by tasks status
 */
export interface Achievement extends Task {
  image: string;
  checkComplete: CheckComplete;
}

/**
 * Status describes a state of
some item (a task or an
achievement) and a
timestamp, when this state
was updated
 */
export interface Status {
  state: ItemState;
  updated: number;
}

/**
 * Challenge describes a 30-days
period, during which randomly
chosen 30 tasks and 5
achievements are assigned for
the user. Starting from the first
day, the user will receive a
new task every day, which
should be completed before
the midnight, overwise it will
be marked as failed.
Achievements status is
calculated based on tasks
completion. After 30 days the
challenge could be successful
(>= 90% tasks completed) or
failed (<90% tasks completed)
@param challengeState - can be: In Progress, Success, Failure
@param startDate - timestamp when the challenge was created
@param tasksOrder - ordered set of tasks for the challenge
@param tasksStatus - describes current status for all tasks in the challenge
@param achievementsStatus - describes current status for all achievements in the challenge
 */
export interface Challenge {
  challengeId: number;
  challengeState: ChallengeState;
  startDate: Date;
  tasksOrder: Task[];
  tasksStatus: Record<number, Status>;
  achievementsStatus: Record<number, Status>;
}

/**
 * ArchiveItem describes a task
and its status for all past tasks
in the challenge
 */
export interface ArchiveItem extends Task {
  status: Status;
}

/**
 * ActualTask provides
information about a task and
its current status in scope of
the challenge
 */
export interface ActualTask extends Task {
  status: Status;
}

/**
 * ActualAchievement provides
information about an
achievement and its current
status in scope of the
challenge
 */
export interface ActualAchievement extends Omit<Achievement, 'checkComplete'> {
  status: Status;
}

/**
 * Should find a
required challenge from all challenges
and pick a task for today using the
challenge startDate and tasksOrder for
calculation. For example, if today is a
ten’s day of the challenge the
corresponding task should be
returned.
* @param challengeId - id of current challenge
*
 * @returns Returns a current task with its status
by the challenge id. 
 */
export type GetCurrentTask = (
  challengeId: number,
  challenges: Challenge[]
) => ActualTask;

/**
*
* @param challengeId - id of current challenge
*
* @returns Returns a list of actual achievements
by the challenge id. Should find a
required challenge from all challenges
and return data for its achievements
with their statuses.
*/
export type GetAchievements = (
  challengeId: number,
  challenges: Challenge[]
) => ActualAchievement[];

/**
 * *
* @param challengeId - id of current challenge
*
* @returns Returns all past tasks with their results
by the challenge id. Should find a
required challenge from all challenges
and return a list of previous tasks with
their statuses.
 */
export type GetTaskArchive = (
  challengeId: number,
  challenges: Challenge[]
) => ArchiveItem[];

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
export type StartNewChallenge = (
  tasksList: Task[],
  achievementsList: ActualAchievement[],
  challengeDuration?: number
) => Challenge;

/**
 * Returns achievements status for the challenge by its achievements list and tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */
export type CalculateAchievementsStatus = (
  challengeId: number,
  challenges: Challenge[],
  achievements: Achievement[],
  tasksStatus: Record<number, Status>
) => Map<number, Status>;
