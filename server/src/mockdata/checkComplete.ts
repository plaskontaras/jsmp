import { Achievement } from '../types/interfaces';

const achievementsList: Achievement[] = [
  {
    itemId: 0,
    description: "Complete 4 Monday's tasks",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk0VIWYGwdt6MzzTaHv3rseEa1OU8q8VxjLA&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      const mondaysTask = passedTasks.reduce((acc, item) => {
        const getDay = new Date(item.updated).getDay();
        if (getDay === 1) {
          acc++;
        }
        return acc;
      }, 0);

      if (mondaysTask >= 4) {
        return 'Success';
      }
      return 'Pending';
    }
  },
  {
    itemId: 1,
    description: 'Complete each task 7 days in a row',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrEV9De3KxSYy2Dmm2owJ2mGQcI4kyR_Hmbw&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      const statusArray = [];
      for (let i = 0; i < passedTasks.length; i++) {
        statusArray.push(passedTasks[i].state);
      }

      if (
        statusArray
          .join(',')
          .includes('SuccessSuccessSuccessSuccessSuccessSuccessSuccess')
      ) {
        return 'Success';
      }

      return 'Pending';
    }
  },
  {
    itemId: 2,
    description: 'Complete five tasks before 8:00 AM',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      const beforeEight = passedTasks.reduce((acc, item) => {
        const getHour = new Date(item.updated).getHours();
        if (getHour <= 8) {
          acc++;
        }
        return acc;
      }, 0);

      if (beforeEight >= 5) {
        return 'Success';
      }

      return 'Pending';
    }
  },
  {
    itemId: 3,
    description: 'Complete seven tasks before 9:00 AM',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      const beforeNine = passedTasks.reduce((acc, item) => {
        const getHour = new Date(item.updated).getHours();
        if (getHour <= 9) {
          acc++;
        }
        return acc;
      }, 0);

      if (beforeNine >= 7) {
        return 'Success';
      }

      return 'Pending';
    }
  },
  {
    itemId: 4,
    description: 'Complete fifteen tasks before 10:00 AM',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAW5PDsAv8qUxxNKqYTDOwS0ev06qhLbaDJA&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      const beforeTen = passedTasks.reduce((acc, item) => {
        const getHour = new Date(item.updated).getHours();
        if (getHour <= 10) {
          acc++;
        }
        return acc;
      }, 0);

      if (beforeTen >= 15) {
        return 'Success';
      }

      return 'Pending';
    }
  },
  {
    itemId: 5,
    description: 'Complete half of the tasks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK0iOiaEUaQzAsyagPoDxMDPn3bsBS0w5jWA&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      if (passedTasks.length >= 15) {
        return 'Success';
      }
      return 'Pending';
    }
  },
  {
    itemId: 6,
    description: 'Complete all tasks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVtqF0pb1fYP4Vgm5AWuu3k-JAaQhHVJsG2w&usqp=CAU',
    checkComplete(tasksStatus) {
      const passedTasks = tasksStatus.filter((i) => i.state === 'Success');

      if (passedTasks.length >= 30) {
        return 'Success';
      }
      return 'Pending';
    }
  }
];

export function loadAchievements(): Achievement[] {
  return achievementsList;
}
