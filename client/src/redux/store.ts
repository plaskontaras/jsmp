import { combineReducers, createStore } from 'redux';
import currentChallenge from './challenge-reducer';

let reducers = combineReducers({
    currentChallenge,
});

let store = createStore(reducers);

export default store;
