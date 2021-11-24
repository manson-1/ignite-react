import { combineReducers } from 'redux';
import gamesReducer from './GamesReducer'

const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;