import { Challenge, Status } from './types/interfaces';
import { startNewChallenge } from './services/startNewChallenge';
import { getAchievements } from './services/getAchievements';
import { getTaskArchive } from './services/getTaskArchive';
import { calculateAchievementsStatus } from './services/calculateAchievementsStatus';
import { tasks } from './mockDB/tasks.json';
import { allAchievements } from './mockDB/achivements.json';
import { generateActualAchievementsList } from './services/helpers/generateActualAchievementsList';

import express = require('express');
const config = require('config');

// const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = config.get('port') || 5000;

export const challenges: any = [];
const achievementsList = generateActualAchievementsList(allAchievements);
const tempChallenge: Challenge[] = [
  startNewChallenge(tasks, achievementsList, 30)
];

app.use('/newchallenge', require('./routes/newchallenge.routes'));
app.use('/currenttask', require('./routes/currenttask.routes'));

app.use('/task', require('./routes/task.routes'));
app.use('/achievement', require('./routes/achievement.routes'));

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// The server should update the current task status
const taskUpdate = io.of('/taskUpdate');

taskUpdate.on('connection', (socket: any) => {
  console.log('user connected');

  socket.on('task status was updated', (msg: any) => {
    const newTaskStatus = msg;
    tempChallenge[0].tasksStatus[0] = {
      state: newTaskStatus,
      updated: new Date().getTime()
    };

    const newAchievementStatuses: Map<
      number,
      Status
    > = calculateAchievementsStatus(
      tempChallenge[0].challengeId,
      tempChallenge
    );

    for (const achivement of newAchievementStatuses.keys()) {
      const newStatus = newAchievementStatuses.get(achivement);
      if (newStatus) {
        tempChallenge[0].achievementsStatus[achivement] = newStatus;
      }
    }

    socket.emit(
      'achievements was updated',
      tempChallenge[0].achievementsStatus
    );
  });
});

app.get('/currentachievement', (req: any, res: any) => {
  const challengeAchievements = getAchievements(
    challenges[0].challengeId,
    challenges
  );
  res.send(JSON.stringify(challengeAchievements));
});

app.get('/taskarchive', (req: any, res: any) => {
  const challengeAchievements = getTaskArchive(
    challenges[0].challengeId,
    challenges
  );
  res.send(JSON.stringify(challengeAchievements));
});

app.get('/taskComplete', (req: any, res: any) => {
  res.send(JSON.stringify('Success'));
});

// SHEDULER
const schedule = require('node-schedule');

// Set the current task status to Failure at 12 AM every day during the challenge
schedule.scheduleJob({ hour: 23, minute: 59, second: 59 }, function () {
  const currentChallenge = tempChallenge[0];
  tempChallenge[0].tasksStatus[
    new Date().getDate() - new Date(currentChallenge.startDate).getDate()
  ] = { state: 'Failure', updated: new Date().getTime() };
  console.log('umba');
});

// Calculate the achievements status and the challenge state at 12 AM of the last day of the challenge
const endOfChallengeDate = new Date(
  tempChallenge[0].startDate.getTime() + 30 * 24 * 3600 * 1000
);
schedule.scheduleJob(endOfChallengeDate, function () {
  const newAchievementStatuses: Map<
    number,
    Status
  > = calculateAchievementsStatus(tempChallenge[0].challengeId, tempChallenge);
  for (const achivement of newAchievementStatuses.keys()) {
    const newStatus = newAchievementStatuses.get(achivement);
    if (newStatus) {
      tempChallenge[0].achievementsStatus[achivement] = newStatus;
    }
  }
});
