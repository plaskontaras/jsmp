const SET_CURRENT_TASK = 'SET-CURRENT-TASK';
const FINISH_CURRENT_TASK = 'FINISH_CURRENT_TASK';
const SET_CURRENT_ACHIEVEMENTS = 'SET_CURRENT_ACHIEVEMENTS';
const SET_TASK_ARCHIVE = 'SET_TASK_ARCHIVE';
const SET_CHALLENGE_STATE = 'SET_CHALLENGE_STATE';
const SET_START_DATE = 'SET_START_DATE';

let initialState = {
    isChallenge: false,
    currentTask: {
        description: 'No current task',
        id: 12,
        status: { state: 'None', updated: 0 },
        _id: '123456',
    },
    achievements: [
        {
            id: 100500,
            description: "You don't have achievements yet.",
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk0VIWYGwdt6MzzTaHv3rseEa1OU8q8VxjLA&usqp=CAU',
            status: { state: 'No status', updated: Date.now() },
        },
    ],
    taskArchive: [],
    challengeState: 'In Progress',
    startDate: 'hz',
};

const currentChallenge = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.currentTask,
            };
        case SET_CURRENT_ACHIEVEMENTS:
            return {
                ...state,
                achievements: action.achievements,
            };
        case FINISH_CURRENT_TASK:
            return {
                ...state,
                achievements: state.achievements.map((a) => {
                    return { ...a, status: action.achievements[a.id] };
                }),
            };
        case SET_TASK_ARCHIVE: {
            let newTaskArchive: any = [];
            for (let key in action.taskArchive) {
                newTaskArchive.push(action.taskArchive[key]);
            }
            return {
                ...state,
                taskArchive: newTaskArchive,
            };
        }
        case SET_CHALLENGE_STATE:
            return {
                ...state,
                challengeState: action.challengeState,
            };
        case SET_START_DATE:
            return {
                ...state,
                startDate: action.startDate,
            };
        default:
            return state;
    }
};

export const setCurrentTask = (currentTask: any) => ({
    type: SET_CURRENT_TASK,
    currentTask,
});
export const finishCurrentTask = (achievements: any) => ({
    type: FINISH_CURRENT_TASK,
    achievements,
});
export const setCurrentAchievements = (achievements: any) => ({
    type: SET_CURRENT_ACHIEVEMENTS,
    achievements,
});
export const setTaskArchive = (taskArchive: any) => ({
    type: SET_TASK_ARCHIVE,
    taskArchive,
});
export const setChallengeState = (challengeState: any) => ({
    type: SET_CHALLENGE_STATE,
    challengeState,
});
export const setStartDate = (startDate: any) => ({
    type: SET_START_DATE,
    startDate,
});

export default currentChallenge;
