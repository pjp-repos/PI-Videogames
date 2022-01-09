import { 
    SET_GAMES,
    SET_GAMES_PAGINATED,
    SET_GAMES_FILTERED 
} from "../types";

const initialState = {
    games: [],
    gamesFiltered:[],
    gamesOrdered:[],
    gamesPaginated:[],
    genres: [],
    platforms: [],
    gameDetail: {}
};

const reducerGames = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {
            ...state,
            games:action.payload,
            }

        case SET_GAMES_PAGINATED:
            return {
            ...state,
            gamesPaginated:action.payload,
            }
        case SET_GAMES_FILTERED:
            return {
            ...state,
            gamesFiltered:action.payload,
            }
        default:
            return {...state}
    }
}

export default reducerGames;