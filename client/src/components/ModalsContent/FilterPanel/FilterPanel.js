// Libraries
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux actions
import { 
    filterGames,
    setModal 
} from '../../../redux/actions/actionsGames';

// Custom hooks
import { useFilter } from '../../../hooks/useFilter';

// Styled components
import {
    FilterPanelWrapper,
    FilterPanelInput
} from "./FilterPanelElements";
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import { Button } from '../../AaaGenerics/Button/Button';

// Fields and default values
const initialForm = {
    name:"",
    ratingMin:"",
    ratingMax:"",
    genres:[],
    platforms:[]
}

// Field validations
const validationsForm = (form)=>{
    let errors={};
    return errors;
};
  
const FilterPanel = () => {
    // Redux
    const state = useSelector(state => state);   
    const dispatch = useDispatch();
    const closeModal=()=>dispatch(setModal({modal:'filterPanel',value:false}));
    const submitForm=()=>dispatch(filterGames(form));

    // Dropdows option list
    const genres = state.games.genres.map(el=>{
        return{
            key: el.id,
            value: el.name
        }
    });

    const platforms = state.games.platforms.map(el=>{
        return{
            key: el.id,
            value: el.name
        }
    });

    // Custom hook useForm
    const {        
        form,
        handleChange,
        handleDropdown,
        handleSubmit,
        resetFields
    } = useFilter(initialForm, validationsForm, submitForm);

    const handleExecute = ()=>{
        if(handleSubmit()){
            resetFields();
            closeModal();
        };
    };

    if(state.games.loadings.genres || state.games.loadings.platforms) return null;

    return (
        <>
            <FilterPanelWrapper>
                <FilterPanelInput 
                    type="text" 
                    name="name"
                    value = {form.name}
                    placeholder='name...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="text" 
                    name="ratingMin"
                    value = {form.ratingMin}
                    placeholder='minimum rating...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="text" 
                    name="ratingMax"
                    value = {form.ratingMax}
                    placeholder='Maximum rating...'
                    onChange={handleChange}
                />

                <Dropdown 
                    titleOn="Genres"
                    titleOff="Close"
                    options={genres}
                    multiple={true}
                    
                    fieldName='genres'
                    fieldValue={form.genres}
                    dropdownCb={handleDropdown}
                /> 

                <Dropdown 
                    titleOn="Platforms"
                    titleOff="Close"
                    options={platforms}
                    multiple={true}
                    
                    fieldName='platforms'
                    fieldValue={form.platforms}
                    dropdownCb={handleDropdown}
                />

                <Button onClick={handleExecute}>
                    Filter
                </Button>
                <Button onClick={closeModal}>
                    Cancel/Close
                </Button>
                <Button onClick={resetFields}>
                    Clear fields
                </Button> 
            </FilterPanelWrapper>
        </>
    )
}

export default FilterPanel;