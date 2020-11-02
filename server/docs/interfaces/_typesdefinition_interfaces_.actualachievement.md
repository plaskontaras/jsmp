**[server-side](../README.md)**

> [Globals](../globals.md) / ["typesdefinition/interfaces"](../modules/_typesdefinition_interfaces_.md) / ActualAchievement

# Interface: ActualAchievement

ActualAchievement provides
information about an
achievement and its current
status in scope of the
challenge

## Hierarchy

- [Achievement](_typesdefinition_interfaces_.achievement.md)

  ↳ **ActualAchievement**

## Index

### Properties

- [description](_typesdefinition_interfaces_.actualachievement.md#description)
- [id](_typesdefinition_interfaces_.actualachievement.md#id)
- [image](_typesdefinition_interfaces_.actualachievement.md#image)
- [status](_typesdefinition_interfaces_.actualachievement.md#status)

### Methods

- [checkComplete](_typesdefinition_interfaces_.actualachievement.md#checkcomplete)

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

_Inherited from [Achievement](\_typesdefinition_interfaces_.achievement.md).[image](_typesdefinition_interfaces_.achievement.md#image)\_

_Defined in [typesdefinition/interfaces.ts:23](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L23)_

---

### status

• **status**: [Status](_typesdefinition_interfaces_.status.md)

_Defined in [typesdefinition/interfaces.ts:98](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L98)_

## Methods

### checkComplete

▸ **checkComplete**(`tasksStatus`: [Status](_typesdefinition_interfaces_.status.md)): [ItemState](../enums/_typesdefinition_enums_.itemstate.md)

_Inherited from [Achievement](\_typesdefinition_interfaces_.achievement.md).[checkComplete](_typesdefinition_interfaces_.achievement.md#checkcomplete)\_

_Defined in [typesdefinition/interfaces.ts:24](https://github.com/plaskontaras/jsmp/blob/e118664/server/src/typesdefinition/interfaces.ts#L24)_

#### Parameters:

| Name          | Type                                             |
| ------------- | ------------------------------------------------ |
| `tasksStatus` | [Status](_typesdefinition_interfaces_.status.md) |

**Returns:** [ItemState](../enums/_typesdefinition_enums_.itemstate.md)
