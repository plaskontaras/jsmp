**[server-side](../README.md)**

> [Globals](../globals.md) / ["types/interfaces"](../modules/_types_interfaces_.md) / Challenge

# Interface: Challenge

Challenge describes a 30-days
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

**`param`** can be: In Progress, Success, Failure

**`param`** timestamp when the challenge was created

**`param`** ordered set of tasks for the challenge

**`param`** describes current status for all tasks in the challenge

**`param`** describes current status for all achievements in the challenge

## Hierarchy

- **Challenge**

## Index

### Properties

- [achievementsStatus](_types_interfaces_.challenge.md#achievementsstatus)
- [challengeId](_types_interfaces_.challenge.md#challengeid)
- [challengeState](_types_interfaces_.challenge.md#challengestate)
- [startDate](_types_interfaces_.challenge.md#startdate)
- [tasksOrder](_types_interfaces_.challenge.md#tasksorder)
- [tasksStatus](_types_interfaces_.challenge.md#tasksstatus)

## Properties

### achievementsStatus

• **achievementsStatus**: Record\<number, [Status](_types_interfaces_.status.md)>

_Defined in [types/interfaces.ts:85](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L85)_

---

### challengeId

• **challengeId**: number

_Defined in [types/interfaces.ts:80](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L80)_

---

### challengeState

• **challengeState**: [ChallengeState](../modules/_types_interfaces_.md#challengestate)

_Defined in [types/interfaces.ts:81](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L81)_

---

### startDate

• **startDate**: Date

_Defined in [types/interfaces.ts:82](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L82)_

---

### tasksOrder

• **tasksOrder**: [Task](_types_interfaces_.task.md)[]

_Defined in [types/interfaces.ts:83](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L83)_

---

### tasksStatus

• **tasksStatus**: Record\<number, [Status](_types_interfaces_.status.md)>

_Defined in [types/interfaces.ts:84](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/types/interfaces.ts#L84)_
