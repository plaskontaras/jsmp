**[server-side](../README.md)**

> [Globals](../globals.md) / "services/getAchievements"

# Module: "services/getAchievements"

## Index

### Variables

- [allAchievementsList](_services_getachievements_.md#allachievementslist)

### Functions

- [getAchievements](_services_getachievements_.md#getachievements)

## Variables

### allAchievementsList

• `Const` **allAchievementsList**: { description: string = "Complete 4 Monday's tasks"; image: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk0VIWYGwdt6MzzTaHv3rseEa1OU8q8VxjLA&usqp=CAU"; itemId: number = 0 }[] = allAchievements

_Defined in [services/getAchievements.ts:4](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/services/getAchievements.ts#L4)_

## Functions

### getAchievements

▸ `Const`**getAchievements**(`challengeId`: number, `challenges`: [Challenge](../interfaces/_types_interfaces_.challenge.md)[]): { description: string = currentAchievement.description; image: string = currentAchievement.image; itemId: number = currentAchievement.itemId; status: { state: [ItemState](_types_interfaces_.md#itemstate) = achievementsStatus[achievement].state; updated: number = achievementsStatus[achievement].updated } = CurrentAchievementStatus }[]

_Defined in [services/getAchievements.ts:6](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/services/getAchievements.ts#L6)_

#### Parameters:

| Name          | Type                                                         |
| ------------- | ------------------------------------------------------------ |
| `challengeId` | number                                                       |
| `challenges`  | [Challenge](../interfaces/_types_interfaces_.challenge.md)[] |

**Returns:** { description: string = currentAchievement.description; image: string = currentAchievement.image; itemId: number = currentAchievement.itemId; status: { state: [ItemState](_types_interfaces_.md#itemstate) = achievementsStatus[achievement].state; updated: number = achievementsStatus[achievement].updated } = CurrentAchievementStatus }[]
