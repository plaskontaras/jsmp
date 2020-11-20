**[server-side](../README.md)**

> [Globals](../globals.md) / "types/interfaces"

# Module: "types/interfaces"

## Index

### Interfaces

- [Achievement](../interfaces/_types_interfaces_.achievement.md)
- [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)
- [ActualTask](../interfaces/_types_interfaces_.actualtask.md)
- [ArchiveItem](../interfaces/_types_interfaces_.archiveitem.md)
- [Challenge](../interfaces/_types_interfaces_.challenge.md)
- [Status](../interfaces/_types_interfaces_.status.md)
- [Task](../interfaces/_types_interfaces_.task.md)

### Type aliases

- [CalculateAchievementsStatus](_types_interfaces_.md#calculateachievementsstatus)
- [ChallengeState](_types_interfaces_.md#challengestate)
- [CheckComplete](_types_interfaces_.md#checkcomplete)
- [GetAchievements](_types_interfaces_.md#getachievements)
- [GetCurrentTask](_types_interfaces_.md#getcurrenttask)
- [GetTaskArchive](_types_interfaces_.md#gettaskarchive)
- [ItemState](_types_interfaces_.md#itemstate)
- [StartNewChallenge](_types_interfaces_.md#startnewchallenge)

## Type aliases

### CalculateAchievementsStatus

Ƭ **CalculateAchievementsStatus**: (challengeId: number, challenges: [Challenge](../interfaces/_types_interfaces_.challenge.md)[], achievements: [Achievement](../interfaces/_types_interfaces_.achievement.md)[], tasksStatus: Record\<number, [Status](../interfaces/_types_interfaces_.status.md)>) => Map\<number, [Status](../interfaces/_types_interfaces_.status.md)>

_Defined in [types/interfaces.ts:191](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L191)_

Returns achievements status for the challenge by its achievements list and tasks status

**`param`** a list of achievements

**`param`** tasks status

---

### ChallengeState

Ƭ **ChallengeState**: \"In Progress\" \| \"Success\" \| \"Failure\"

_Defined in [types/interfaces.ts:5](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L5)_

Challenge state - can be: In Progress,
Success, Failure

---

### CheckComplete

Ƭ **CheckComplete**: (tasksStatus: Record\<number, [Status](../interfaces/_types_interfaces_.status.md)>) => [ItemState](_types_interfaces_.md#itemstate)

_Defined in [types/interfaces.ts:27](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L27)_

A method in Achievement that can return an achievement status by tasks status.

---

### GetAchievements

Ƭ **GetAchievements**: (challengeId: number, challenges: [Challenge](../interfaces/_types_interfaces_.challenge.md)[]) => [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)[]

_Defined in [types/interfaces.ts:147](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L147)_

**`param`** id of current challenge

**`returns`** Returns a list of actual achievements
by the challenge id. Should find a
required challenge from all challenges
and return data for its achievements
with their statuses.

---

### GetCurrentTask

Ƭ **GetCurrentTask**: (challengeId: number, challenges: [Challenge](../interfaces/_types_interfaces_.challenge.md)[]) => [ActualTask](../interfaces/_types_interfaces_.actualtask.md)

_Defined in [types/interfaces.ts:132](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L132)_

Should find a
required challenge from all challenges
and pick a task for today using the
challenge startDate and tasksOrder for
calculation. For example, if today is a
ten’s day of the challenge the
corresponding task should be
returned.

**`param`** id of current challenge

**`returns`** Returns a current task with its status
by the challenge id.

---

### GetTaskArchive

Ƭ **GetTaskArchive**: (challengeId: number, challenges: [Challenge](../interfaces/_types_interfaces_.challenge.md)[]) => [ArchiveItem](../interfaces/_types_interfaces_.archiveitem.md)[]

_Defined in [types/interfaces.ts:162](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L162)_

- **`param`** id of current challenge

  **`returns`** Returns all past tasks with their results
  by the challenge id. Should find a
  required challenge from all challenges
  and return a list of previous tasks with
  their statuses.

---

### ItemState

Ƭ **ItemState**: \"Pending\" \| \"Success\" \| \"Failure\"

_Defined in [types/interfaces.ts:12](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L12)_

ItemState describes a state of
some item (a task or an
achievement)

---

### StartNewChallenge

Ƭ **StartNewChallenge**: (tasksList: [Task](../interfaces/_types_interfaces_.task.md)[], achievementsList: [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)[], challengeDuration?: undefined \| number) => [Challenge](../interfaces/_types_interfaces_.challenge.md)

_Defined in [types/interfaces.ts:180](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L180)_

**`param`** a list of tasks

**`param`** a list of challenges

**`param`** challenge duration that by default should be 30 days

**`param`** number of achievements that by default should be challenge duration / 6

**`returns`** Returns a new challenge using the following
parameters: a list of tasks, a list of challenges,
challenge duration that by default should be 30
days, number of achievements – by default,
challenge duration / 6
