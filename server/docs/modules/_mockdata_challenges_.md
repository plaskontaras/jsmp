**[server-side](../README.md)**

> [Globals](../globals.md) / "mockdata/challenges"

# Module: "mockdata/challenges"

## Index

### Variables

- [achievementsStatus](_mockdata_challenges_.md#achievementsstatus)
- [achievementsStatus2](_mockdata_challenges_.md#achievementsstatus2)
- [challenges](_mockdata_challenges_.md#challenges)
- [tasksStatus](_mockdata_challenges_.md#tasksstatus)
- [threeDaysAgoStartDate](_mockdata_challenges_.md#threedaysagostartdate)

## Variables

### achievementsStatus

• `Const` **achievementsStatus**: Record\<number, [Status](../interfaces/_types_interfaces_.status.md)> = allAchievements .slice(0, 5) .reduce(function (acc: any, cur) { const ids = cur.itemId; acc[ids] = { state: 'Pending', updated: new Date() }; return acc; }, {})

_Defined in [mockdata/challenges.ts:13](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/mockdata/challenges.ts#L13)_

---

### achievementsStatus2

• `Const` **achievementsStatus2**: Record\<number, [Status](../interfaces/_types_interfaces_.status.md)> = allAchievements .slice(0, 5) .reduce(function (acc: any, cur) { const ids = cur.itemId; acc[ids] = { state: 'Success', updated: new Date() }; return acc; }, {})

_Defined in [mockdata/challenges.ts:21](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/mockdata/challenges.ts#L21)_

---

### challenges

• `Const` **challenges**: [Challenge](../interfaces/_types_interfaces_.challenge.md)[] = [ { challengeId: 0, challengeState: 'In Progress', startDate: new Date(), tasksOrder: tasks.slice(0, 30), tasksStatus, achievementsStatus }, { challengeId: 1, challengeState: 'In Progress', startDate: new Date(threeDaysAgoStartDate), tasksOrder: tasks.slice(0, 30), tasksStatus, achievementsStatus }, { challengeId: 2, challengeState: 'In Progress', startDate: new Date(threeDaysAgoStartDate), tasksOrder: tasks.slice(0, 30), tasksStatus, achievementsStatus: achievementsStatus2 }, { challengeId: 3, challengeState: 'In Progress', startDate: new Date(), tasksOrder: tasks.slice(0, 30), tasksStatus: { 16160: { state: 'Success', updated: new Date(2020, 10, 2, 12, 14).getTime() }, 6161: { state: 'Success', updated: new Date(2020, 10, 9, 12, 14).getTime() }, 2666: { state: 'Success', updated: new Date(2020, 10, 16, 12, 14).getTime() }, 3235: { state: 'Success', updated: new Date(2020, 9, 26, 12, 14).getTime() }, 4166: { state: 'Success', updated: 1515151515 }, 5525: { state: 'Success', updated: new Date(2020, 10, 1, 7, 14).getTime() }, 6969: { state: 'Success', updated: new Date(2020, 10, 2, 7, 14).getTime() }, 71626: { state: 'Success', updated: new Date(2020, 10, 3, 7, 14).getTime() }, 8: { state: 'Success', updated: new Date(2020, 10, 4, 7, 14).getTime() }, 9: { state: 'Success', updated: new Date(2020, 10, 5, 7, 14).getTime() }, 10: { state: 'Success', updated: new Date(2020, 10, 6, 7, 14).getTime() }, 11: { state: 'Success', updated: new Date(2020, 10, 7, 7, 14).getTime() }, 12: { state: 'Success', updated: new Date(2020, 10, 8, 7, 14).getTime() }, 13: { state: 'Success', updated: new Date(2020, 10, 15, 12, 30).getTime() }, 14: { state: 'Success', updated: new Date(2020, 10, 15, 12, 30).getTime() }, 15: { state: 'Success', updated: new Date(2020, 10, 15, 12, 30).getTime() }, 16: { state: 'Success', updated: new Date(2020, 10, 15, 12, 30).getTime() }, 17: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 18: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 19: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 20: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 21: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 22: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 23: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 24: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 25: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 26: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 27: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 28: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() }, 29: { state: 'Success', updated: new Date(2020, 10, 20, 12, 30).getTime() } }, achievementsStatus: { 0: { state: 'Pending', updated: 15151515 }, 1: { state: 'Pending', updated: 15151515 }, 2: { state: 'Pending', updated: 15151515 }, 3: { state: 'Pending', updated: 15151515 }, 4: { state: 'Pending', updated: 15151515 }, 5: { state: 'Pending', updated: 15151515 }, 6: { state: 'Pending', updated: 15151515 } } }]

_Defined in [mockdata/challenges.ts:31](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/mockdata/challenges.ts#L31)_

---

### tasksStatus

• `Const` **tasksStatus**: Record\<number, [Status](../interfaces/_types_interfaces_.status.md)> = tasks .slice(0, 30) .reduce(function (acc: any, cur) { const ids = cur.itemId; acc[ids] = { state: 'Pending', updated: new Date() }; return acc; }, {})

_Defined in [mockdata/challenges.ts:5](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/mockdata/challenges.ts#L5)_

---

### threeDaysAgoStartDate

• `Const` **threeDaysAgoStartDate**: number = Date.now() - +new Date(3 _ 24 _ 3600 \* 1000)

_Defined in [mockdata/challenges.ts:29](https://github.com/plaskontaras/jsmp/blob/bc6b3bd/server/src/mockdata/challenges.ts#L29)_
