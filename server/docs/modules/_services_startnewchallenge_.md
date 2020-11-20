**[server-side](../README.md)**

> [Globals](../globals.md) / "services/startNewChallenge"

# Module: "services/startNewChallenge"

## Index

### Functions

- [generateAchievementsStatus](_services_startnewchallenge_.md#generateachievementsstatus)
- [getRandomInteger](_services_startnewchallenge_.md#getrandominteger)
- [getShuffledArray](_services_startnewchallenge_.md#getshuffledarray)
- [startNewChallenge](_services_startnewchallenge_.md#startnewchallenge)

## Functions

### generateAchievementsStatus

▸ **generateAchievementsStatus**(`achievementsList`: [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)[], `achievementsAmount`: number): Record\<number, [Status](../interfaces/_types_interfaces_.status.md)>

_Defined in [services/startNewChallenge.ts:64](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/services/startNewChallenge.ts#L64)_

#### Parameters:

| Name                 | Type                                                                         |
| -------------------- | ---------------------------------------------------------------------------- |
| `achievementsList`   | [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)[] |
| `achievementsAmount` | number                                                                       |

**Returns:** Record\<number, [Status](../interfaces/_types_interfaces_.status.md)>

---

### getRandomInteger

▸ **getRandomInteger**(`min`: number, `max`: number): number

_Defined in [services/startNewChallenge.ts:42](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/services/startNewChallenge.ts#L42)_

#### Parameters:

| Name  | Type   |
| ----- | ------ |
| `min` | number |
| `max` | number |

**Returns:** number

---

### getShuffledArray

▸ **getShuffledArray**\<T>(`array`: T[], `numberOfElements`: number): T[]

_Defined in [services/startNewChallenge.ts:46](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/services/startNewChallenge.ts#L46)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name               | Type   |
| ------------------ | ------ |
| `array`            | T[]    |
| `numberOfElements` | number |

**Returns:** T[]

---

### startNewChallenge

▸ `Const`**startNewChallenge**(`tasksList`: [Task](../interfaces/_types_interfaces_.task.md)[], `achievementsList`: [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)[], `challengeDuration?`: undefined \| number): [Challenge](../interfaces/_types_interfaces_.challenge.md)

_Defined in [services/startNewChallenge.ts:8](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/services/startNewChallenge.ts#L8)_

#### Parameters:

| Name                | Type                                                                         | Default value |
| ------------------- | ---------------------------------------------------------------------------- | ------------- |
| `tasksList`         | [Task](../interfaces/_types_interfaces_.task.md)[]                           | -             |
| `achievementsList`  | [ActualAchievement](../interfaces/_types_interfaces_.actualachievement.md)[] | -             |
| `challengeDuration` | undefined \| number                                                          | 30            |

**Returns:** [Challenge](../interfaces/_types_interfaces_.challenge.md)
