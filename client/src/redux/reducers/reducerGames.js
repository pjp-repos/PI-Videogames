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

// Helpers
import { 
    filterCbNameInclude,
    filterCbRatingMin,
    filterCbRatingMax,
    filterCbGenres,
    filterCbPlatforms 
} from '../../helpers/helpFilterCallbacks';

import { 
    sortCbNameNcsAsc,
    sortCbNameNcsDesc,
    sortCbRatingAsc,
    sortCbRatingDesc,
    sortCbReleasedAsc,
    sortCbReleasedDesc 
} from '../../helpers/helpSortCallbacks';

const initialState = {
    games: [],
    gamesFiltered:[],
    gamesOrdered:[],
    gamesPaginated:[],
    game:{},
    genres: [],
    platforms: [],
    pagination:{
        firstPage:15,
        nextPages: 15,
        resetPage: false
    },
    loadings:{
        games:false,
        game:false,
        addGame:false,
        genres:false,
        platforms:false,
        
    },
    errors:{
        games:{
            status:false,
            statusText:""
        },
        game:{
            status:false,
            statusText:""
        },
        addGame:{
            status:false,
            statusText:""
        },
        genres:{
            status:false,
            statusText:""
        },
        platforms:{
            status:false,
            statusText:""
        }
    },
    modals:{
        sidebar: false,
        infoCard: false,
        filterPanel: false,
        orderPanel: false,
        createForm: false,
        loader: false
    }
};

const filterCallbacks = {
    name:filterCbNameInclude,
    ratingMin:filterCbRatingMin,
    ratingMax:filterCbRatingMax,
    genres:filterCbGenres,
    platforms:filterCbPlatforms
}

const sortCallbacks = {
    nameAsc:sortCbNameNcsAsc,
    nameDesc:sortCbNameNcsDesc,
    ratingAsc:sortCbRatingAsc,
    ratingDesc:sortCbRatingDesc,
    releasedAsc:sortCbReleasedAsc,
    releasedDesc:sortCbReleasedDesc
}

const reducerGames = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                games:action.payload,
                gamesFiltered:action.payload,
                gamesOrdered:action.payload,
                gamesPaginated:action.payload.slice(0,state.pagination.firstPage    )
            }

        case SET_GAMES_LOADING:
            return {
                ...state,
                loadings:{
                    ...state.loadings,
                    games:action.payload
                }
            }

        case SET_GAMES_ERROR:
            return {
                ...state,
                errors:{
                    ...state.errors,
                    games:action.payload
                }
            }
            
        case SET_GAME:
            let genresString = ""
            action.payload.genres.forEach(el =>{
                genresString=genresString.concat(" ", el.name);
            });
        
            let platformsString = ""
            action.payload.platforms.forEach(el =>{
                platformsString=platformsString.concat(" ", el.name);
            });
        
            const infoString = `
                Released: ${action.payload.released} 
                | Rating: ${action.payload.rating} 
                | Genres: ${genresString} 
                | Platforms: ${platformsString}
            `;
            return {
                ...state,
                game:{
                    ...action.payload,
                    infoString:infoString
                }
            }


        case SET_GAME_LOADING:
            return {
                ...state,
                loadings:{
                    ...state.loadings,
                    game:action.payload
                }
            }

        case SET_GAME_ERROR:
            return {
                ...state,
                errors:{
                    ...state.errors,
                    game:action.payload
                }
            }

        case ADD_GAME:
            return {
                ...state,
                games:state.games.push(action.payload),
                gamesFiltered:state.games,
                gamesOrdered:state.games,
                gamesPaginated:state.games.slice(0,state.pagination.firstPage-1)
            }

        case ADD_GAME_LOADING:
            return {
                ...state,
                loadings:{
                    ...state.loadings,
                    addGame:action.payload
                }
            }

        case ADD_GAME_ERROR:
            return {
                ...state,
                errors:{
                    ...state.errors,
                    addGame:action.payload
                }
            }

        case SET_GENRES:
            return {
                ...state,
                genres:action.payload
            }

        case SET_GENRES_LOADING:
            return {
                ...state,
                loadings:{
                    ...state.loadings,
                    genres:action.payload
                }
            }

        case SET_GENRES_ERROR:
            return {
                ...state,
                errors:{
                    ...state.errors,
                    genres:action.payload
                }
            }
        
        case SET_PLATFORMS:
            return {
                ...state,
                platforms:action.payload
            }

        case SET_PLATFORMS_LOADING:
            return {
                ...state,
                loadings:{
                    ...state.loadings,
                    platforms:action.payload
                }
            }

        case SET_PLATFORMS_ERROR:
            return {
                ...state,
                errors:{
                    ...state.errors,
                    platforms:action.payload
                }
            }                

        case FILTER_GAMES:
            // action.payload: filter (Object containing filter keys and values)
            // payload example: {
            //     name:'the',              // Name must content 'the'
            //     ratingMin:0,             // No filter minimum rating
            //     ratingMax:999,           // No filter maximum rating
            //     genres:[],               // No filter by genres
            //     platforms:['PC','Xbox']  // Games must include 'PC' or 'Xbox' platfom
            // }
            const filter = action.payload;
            const filterKeys = Object.keys(filter);
            let dataFiltered = [...state.games];
            filterKeys.forEach(key=>{
                let cb = filterCallbacks[key];
                let param = filter[key];
                dataFiltered = dataFiltered.filter((el)=>cb(el,param))
            })
            return {
                ...state,
                gamesFiltered:dataFiltered,
                gamesOrdered:dataFiltered,
                gamesPaginated:dataFiltered.slice(0,state.pagination.firstPage),
                pagination :{
                    ...state.pagination,
                    resetPage: !state.pagination.resetPage
                }
            }

        case ORDER_GAMES:
            // action.payload: order (Key of the order rule to be applied)
            // payload example: "nameAsc" or "" if no order is required.

            const order = action.payload;
            let dataOrdered = [...state.gamesFiltered];
            
            if(order!=="") dataOrdered.sort(sortCallbacks[order])
     
            return {
                ...state,
                gamesOrdered:dataOrdered,
                gamesPaginated:dataOrdered.slice(0,state.pagination.firstPage),
                pagination :{
                    ...state.pagination,
                    resetPage: !state.pagination.resetPage
                }
            }

        case PAGINATE_GAMES:
            let page = action.payload;
            let lastIndex = page===1?state.pagination.firstPage: state.pagination.nextPages*page+(state.pagination.firstPage-state.pagination.nextPages)
            let firstIndex = page===1?0: lastIndex-state.pagination.nextPages;
            return {
                ...state,
                gamesPaginated:state.gamesOrdered.slice(firstIndex,lastIndex)
            }

        case SET_MODAL:
            return {
                ...state,
                modals:{
                    ...state.modals,
                    [action.payload.modal]:action.payload.state
                }
            }    
        default:
            return {...state}
    }
}

export default reducerGames;