import { 
    SET_GAMES,
    SET_GAMES_PAGINATED,
    SET_GAMES_FILTERED 
} from "../types";

export const setGames = (payload)=>({type:SET_GAMES,payload});
export const setGamesPaginated = (payload)=>({type:SET_GAMES_PAGINATED,payload});
export const setGamesFiltered = (payload)=>({type:SET_GAMES_FILTERED,payload});