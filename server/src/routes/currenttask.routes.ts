// import { tasks } from '../mockDB/tasks.json';
import { getCurrentTask } from '../services/getCurrentTask';
import { Challenge } from '../models/Challenge';
const UserModel = require('../models/User');

const express = require('express');
const router = express.Router();

router.get('/', async (req: any, res: any) => {
  try {
    const challenges: any = [];
    const user = await UserModel.findOne({ email: req.body.email });
    const currentChallenge = await Challenge.findOne({ owner: user._id });

    challenges.push({ ...currentChallenge.toJSON() });
    const currentTask = getCurrentTask(
      currentChallenge.challengeId,
      challenges
    );

    res.send(JSON.stringify(currentTask));
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;

// {
//   "message": "Signup successful",
//   "user": {
//       "_id": "5fd61b64d3e8d90ef8627c8b",
//       "email": "t1@ukr.net",
//       "password": "$2b$10$QeBF3wpJH1OiopAkZhPBPe/K5.My344yAGGb8cMmvWaFubKabBzNm",
//       "__v": 0
//   }
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmZDYxYjY0ZDNlOGQ5MGVmODYyN2M4YiIsImVtYWlsIjoidDFAdWtyLm5ldCJ9LCJpYXQiOjE2MDc4NjcyNjF9.H6hWW3NDLUDvfGxq-KIjp5gtsahyHxV3113AG4krKds

// {
//   "message": "New challenge with id = 1607867292506 was created!",
//   "id": "5fd61b9cebacfa29a47de5fa"
// }
