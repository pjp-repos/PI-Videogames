import { 
    SET_GAMES,
    SET_GAMES_LOADING,
    SET_GAMES_ERROR,
    SET_GAME,
    SET_GAME_LOADING,
    SET_GAME_ERROR,
    ADD_GAME,
    ADD_GAME_LOADING,
    ADD_GAME_ERROR,
    SET_GENRES,
    SET_GENRES_LOADING,
    SET_GENRES_ERROR,
    SET_PLATFORMS,
    SET_PLATFORMS_LOADING,
    SET_PLATFORMS_ERROR,
    FILTER_GAMES,
    ORDER_GAMES,
    PAGINATE_GAMES,
    SET_MODAL
} from "../types";

export const setGames = (payload)=>({type:SET_GAMES,payload});
export const setGamesLoading = (payload)=>({type:SET_GAMES_LOADING,payload});
export const setGamesError = (payload)=>({type:SET_GAMES_ERROR,payload});

export const setGame = (payload)=>({type:SET_GAME,payload});
export const setGameLoading = (payload)=>({type:SET_GAME_LOADING,payload});
export const setGameError = (payload)=>({type:SET_GAME_ERROR,payload});

export const addGame = (payload)=>({type:ADD_GAME,payload});
export const addGameLoading = (payload)=>({type:ADD_GAME_LOADING,payload});
export const addGameError = (payload)=>({type:ADD_GAME_ERROR,payload});

export const setGenres = (payload)=>({type:SET_GENRES,payload});
export const setGenresLoading = (payload)=>({type:SET_GENRES_LOADING,payload});
export const setGenresError = (payload)=>({type:SET_GENRES_ERROR,payload});

export const setPlatforms = (payload)=>({type:SET_PLATFORMS,payload});
export const setPlatformsLoading = (payload)=>({type:SET_PLATFORMS_LOADING,payload});
export const setPlatformsError = (payload)=>({type:SET_PLATFORMS_ERROR,payload});

export const filterGames = (payload)=>({type:FILTER_GAMES,payload});
export const orderGames = (payload)=>({type:ORDER_GAMES,payload});
export const paginateGames = (payload)=>({type:PAGINATE_GAMES,payload});

export const setModal = (payload)=>({type:SET_MODAL,payload});



