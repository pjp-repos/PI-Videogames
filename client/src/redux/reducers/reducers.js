import {combineReducers} from 'redux';
import reducerGames from './reducerGames';

const reducer = combineReducers({
    games: reducerGames
});

export default reducer;