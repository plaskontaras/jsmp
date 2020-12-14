// taskUpdate.use(function (socket: any, next: any) {
//     if (socket.handshake.query && socket.handshake.query.token) {
//         jwt.verify(socket.handshake.query.token, 'SECRET_KEY', function (err: any, decoded: any) {
//             if (err) return next(new Error('Authentication error'));
//             socket.decoded = decoded;
//             next();
//         });
//     }
//     else {
//         next(new Error('Authentication error'));
//     }
// })
//     .on('connection', (socket: any) => {
//         console.log('user connected');

//         socket.on('task status was updated', (msg: any) => {
//             const newTaskStatus = msg;
//             console.log('msg:', msg);
//             tempChallenge[0].tasksStatus[0] = {
//                 state: newTaskStatus,
//                 updated: new Date().getTime()
//             };

//             const newAchievementStatuses: Map<
//                 number,
//                 Status
//             > = calculateAchievementsStatus(
//                 tempChallenge[0].challengeId,
//                 tempChallenge
//             );

//             for (const achivement of newAchievementStatuses.keys()) {
//                 const newStatus = newAchievementStatuses.get(achivement);
//                 if (newStatus) {
//                     tempChallenge[0].achievementsStatus[achivement] = newStatus;
//                 }
//             }

//             socket.emit(
//                 'achievements was updated',
//                 tempChallenge[0].achievementsStatus
//             );
//         });
//     });
// }
