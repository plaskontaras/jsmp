**[server-side](../README.md)**

> [Globals](../globals.md) / ["typesdefinition/interfaces"](../modules/_typesdefinition_interfaces_.md) / Achievement

# Interface: Achievement

Achievement describes a set of
several tasks accomplished in
the specific way. For example:
“Complete each task 7 days in
a row” or “Complete 5 tasks
before 8:00 AM”

**`param`** a method that can return an achievement status by tasks status

## Hierarchy

- [Task](_typesdefinition_interfaces_.task.md)

  ↳ **Achievement**

  ↳↳ [ActualAchievement](_typesdefinition_interfaces_.actualachievement.md)

## Index

### Properties

- [description](_typesdefinition_interfaces_.achievement.md#description)
- [id](_typesdefinition_interfaces_.achievement.md#id)
- [image](_typesdefinition_interfaces_.achievement.md#image)

### Methods

- [checkComplete](_typesdefinition_interfaces_.achievement.md#checkcomplete)

## Properties

### description

• **description**: string

_Inherited from [Task](\_typesdefinition_interfaces_.task.md).[description](_typesdefinition_interfaces_.task.md#description)\_

_Defined in [typesdefinition/interfaces.ts:10](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L10)_

---

### id

• **id**: number

_Inherited from [Task](\_typesdefinition_interfaces_.task.md).[id](_typesdefinition_interfaces_.task.md#id)\_

_Defined in [typesdefinition/interfaces.ts:9](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L9)_

---

### image

• **image**: string

_Defined in [typesdefinition/interfaces.ts:23](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L23)_

## Methods

### checkComplete

▸ **checkComplete**(`tasksStatus`: [Status](_typesdefinition_interfaces_.status.md)): [ItemState](../enums/_typesdefinition_enums_.itemstate.md)

_Defined in [typesdefinition/interfaces.ts:24](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L24)_

#### Parameters:

| Name          | Type                                             |
| ------------- | ------------------------------------------------ |
| `tasksStatus` | [Status](_typesdefinition_interfaces_.status.md) |

**Returns:** [ItemState](../enums/_typesdefinition_enums_.itemstate.md)
