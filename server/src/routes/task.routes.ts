import { tasks } from '../mockDB/tasks.json';
const Task = require('../models/Task');

const express = require('express');
const router = express.Router();

router.post('/', async (req: any, res: any) => {
  try {
    for (const key in tasks) {
      const id = tasks[key].id;
      const description = tasks[key].description;

      const task = new Task({ id, description });
      await task.save();
    }
    res.status(201).json({ message: 'Tasks were added to DB!' });
  } catch (e) {
    res.status(500).json({ message: 'Error! Something wrong!!!' });
  }
});

module.exports = router;
