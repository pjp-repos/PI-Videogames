// Libraries
import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

// Redux actions
import { setGamesFiltered } from '../../../redux/actions/actionsGames';

// Custom hooks
import { useFetch } from '../../../hooks/useFetch';
import { useFilter } from '../../../hooks/useFilter';

// Styled components
import {
    FilterPanelWrapper,
    FilterPanelInput,
    FilterPanelSelect,
    FilterPanelOption,
    FilterPanelButton
} from "./FilterPanelElements";
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner';

// Helpers
import { 
    filterCbNameInclude,
    filterCbRatingMin,
    filterCbRatingMax,
    filterCbGenres,
    filterCbPlatforms 
} from '../../../helpers/helpFilterCallbacks';
import helpApiKey from '../../../helpers/helpApiKey';


const initialFilter = {
    name:"",
    ratingMin:0,
    ratingMax:999,
    genres:[],
    platforms:[]
}

const filterCb = {
    name:filterCbNameInclude,
    ratingMin:filterCbRatingMin,
    ratingMax:filterCbRatingMax,
    genres:filterCbGenres,
    platforms:filterCbPlatforms
}
  
const FilterPanel = () => {
    // Redux
    const state = useSelector(state => state);
    const dispatch = useDispatch();    
    
    // Fetch genres and platforms for select lists
    let apiKey = helpApiKey();
    const genres = useFetch(`https://api.rawg.io/api/genres?key=${apiKey}`);
    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);

    const loadingSelects = genres.loading || platforms.loading;

    // useFilter custom hook
    const {      
        dataFiltered,
        handleChange,
        handleChangeMult,
        handleExecute
    } = useFilter(initialFilter,filterCb,state.games.games);

    // Update gamesFiltered global variable
    useEffect(() => {
        dispatch(setGamesFiltered(
            dataFiltered
        ));
    }, [dataFiltered]);

    if(loadingSelects) return <Spinner/>;

    return (
        <>
            <FilterPanelWrapper>
                <FilterPanelInput 
                    type="text" 
                    name="name"
                    placeholder='name...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="text" 
                    name="ratingMin"
                    placeholder='minimum rating...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="text" 
                    name="ratingMax"
                    placeholder='Maximum rating...'
                    onChange={handleChange}
                />

                <FilterPanelSelect 
                    name="genres"
                    // value={form.genres}
                    multiple
                    onChange={handleChangeMult}
                    >
                    {
                        genres.data.results.map((el)=>
                        <FilterPanelOption key={el.id} value={el.id}>
                            {el.name}
                        </FilterPanelOption>
                        )
                    }
                </FilterPanelSelect>

                <FilterPanelSelect 
                    name="platforms"
                    // value={form.platforms}
                    multiple
                    onChange={handleChangeMult}
                    >
                    {
                        platforms.data.results.map((el)=>
                            <FilterPanelOption key={el.id} value={el.id}>
                                {el.name}
                            </FilterPanelOption>
                        )
                    }
                </FilterPanelSelect>

                <FilterPanelButton onClick={handleExecute}>
                    Filter
                </FilterPanelButton>
            </FilterPanelWrapper>
        </>
    )
}

export default FilterPanel;