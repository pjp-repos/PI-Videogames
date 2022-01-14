// Libraries
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux actions
import { filterGames } from '../../../redux/actions/actionsGames';

// Custom hooks
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


const initialFilter = {
    name:"",
    ratingMin:"",
    ratingMax:"",
    genres:[],
    platforms:[]
}

  
const FilterPanel = ({closeModal}) => {
    // Redux
    const state = useSelector(state => state);   
    const dispatch = useDispatch();

    // useFilter custom hook
    const {
        filter,      
        handleChange,
        handleChangeMult,
        resetFilter,
    } = useFilter(initialFilter);

    const handleExecuteFilter = ()=>{
        dispatch(filterGames(filter));
        resetFilter();
        closeModal();
    };

    if(state.games.loadings.genres || state.games.loadings.platforms) return <Spinner/>;

    return (
        <>
            <FilterPanelWrapper>
                <FilterPanelInput 
                    type="text" 
                    name="name"
                    value = {filter.name}
                    placeholder='name...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="text" 
                    name="ratingMin"
                    value = {filter.ratingMin}
                    placeholder='minimum rating...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="text" 
                    name="ratingMax"
                    value = {filter.ratingMax}
                    placeholder='Maximum rating...'
                    onChange={handleChange}
                />

                <FilterPanelSelect 
                    name="genres"
                    multiple
                    onChange={handleChangeMult}
                    >
                    {
                        state.games.genres.map((el)=>{
                            return filter.genres.includes(el.id)
                                ?
                                <FilterPanelOption key={el.id} value={el.id} selected>
                                    {el.name}
                                </FilterPanelOption>
                                :
                                <FilterPanelOption key={el.id} value={el.id}>
                                    {el.name}
                                </FilterPanelOption>
                            
                        })
                    }                    
                </FilterPanelSelect>

                <FilterPanelSelect 
                    name="platforms"
                    multiple
                    onChange={handleChangeMult}
                    >
                    {
                        state.games.platforms.map((el)=>{
                            return filter.platforms.includes(el.id)
                                ?
                                <FilterPanelOption key={el.id} value={el.id} selected>
                                    {el.name}
                                </FilterPanelOption>
                                :
                                <FilterPanelOption key={el.id} value={el.id}>
                                    {el.name}
                                </FilterPanelOption>
                            
                        })
                    }
                </FilterPanelSelect>

                <FilterPanelButton onClick={handleExecuteFilter}>
                    Filter
                </FilterPanelButton>
            </FilterPanelWrapper>
        </>
    )
}

export default FilterPanel;