**[server-side](../README.md)**

> [Globals](../globals.md) / ["typesdefinition/interfaces"](../modules/_typesdefinition_interfaces_.md) / Challenge

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

- [achievementsStatus](_typesdefinition_interfaces_.challenge.md#achievementsstatus)
- [id](_typesdefinition_interfaces_.challenge.md#id)
- [startDate](_typesdefinition_interfaces_.challenge.md#startdate)
- [state](_typesdefinition_interfaces_.challenge.md#state)
- [tasksOrder](_typesdefinition_interfaces_.challenge.md#tasksorder)
- [tasksStatus](_typesdefinition_interfaces_.challenge.md#tasksstatus)

## Properties

### achievementsStatus

• **achievementsStatus**: [Status](_typesdefinition_interfaces_.status.md)[]

_Defined in [typesdefinition/interfaces.ts:68](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L68)_

---

### id

• **id**: number

_Defined in [typesdefinition/interfaces.ts:63](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L63)_

---

### startDate

• **startDate**: Date

_Defined in [typesdefinition/interfaces.ts:65](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L65)_

---

### state

• **state**: [ChallengeState](../enums/_typesdefinition_enums_.challengestate.md)

_Defined in [typesdefinition/interfaces.ts:64](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L64)_

---

### tasksOrder

• **tasksOrder**: [Task](_typesdefinition_interfaces_.task.md)[]

_Defined in [typesdefinition/interfaces.ts:66](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L66)_

---

### tasksStatus

• **tasksStatus**: [Status](_typesdefinition_interfaces_.status.md)[]

_Defined in [typesdefinition/interfaces.ts:67](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L67)_
