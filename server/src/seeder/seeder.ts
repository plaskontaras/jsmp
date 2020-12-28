import allAchievements from '../mockDB/achivements.json';
import tasks from '../mockDB/tasks.json';
import user from '../mockDB/user.json';
import User from '../models/User';
const seeder = require('mongoose-seed');
const config = require('config');

export interface IData {
  model: string;
  documents: any;
}

export async function seed() {
  try {
    const data: IData[] = [
      {
        model: 'Achievement',
        documents: allAchievements
      },
      {
        model: 'Task',
        documents: tasks
      }
    ];

    const fakeUser = await User.findOne({ email: 'fake@ukr.net' });

    if (!fakeUser) {
      data.push({
        model: 'User',
        documents: user
      });
    }

    seeder.connect(config.get('mongoUri'), function () {
      seeder.loadModels([
        './src/models/Achievement.ts',
        './src/models/Task.ts',
        './src/models/User.ts'
      ]);

      seeder.clearModels(['Achievement', 'Task'], function () {
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      });
    });
  } catch (e) {
    console.log('Server Errror', e.message);
  }
}
