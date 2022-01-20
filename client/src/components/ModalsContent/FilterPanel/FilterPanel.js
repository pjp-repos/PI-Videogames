// Libraries
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux actions
import { 
    filterGames,
    setModal 
} from '../../../redux/actions/actionsGames';

// Custom hooks
import { useForm } from '../../../hooks/useForm';

// Helpers
import { 
    filterCbNameInclude,
    filterCbRatingMin,
    filterCbRatingMax,
    filterCbGenres,
    filterCbPlatforms 
} from '../../../helpers/helpFilterCallbacks';

// Styled components
import {
    FilterPanelWrapper,
    FilterPanelInput,
    FilterPanelButton,
    FilterPanelButtonWrapp
} from "./FilterPanelElements";
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import { H3 } from '../../AaaGenerics/Texts/Hx';

// Fields and default values
const initialForm = {
    name:"",
    ratingMin:"",
    ratingMax:"",
    genres:[],
    platforms:[]
}

// Filter callbacks
const filterCallbacks = {
    name:filterCbNameInclude,
    ratingMin:filterCbRatingMin,
    ratingMax:filterCbRatingMax,
    genres:filterCbGenres,
    platforms:filterCbPlatforms
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
    const submitForm=(form)=>dispatch(filterGames({form:form,Cbs:filterCallbacks}));

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
    } = useForm(initialForm, validationsForm, submitForm);

    const handleExecute = ()=>{
        if(handleSubmit(true)){
            closeModal();
        };
    };

    const handleCancel = ()=>{
        resetFields();
        closeModal();
    };


    if(state.games.loadings.genres || state.games.loadings.platforms) return null;

    return (
        <>
            <FilterPanelWrapper>
                <H3>Filter Panel</H3>
                <FilterPanelInput 
                    type="text" 
                    name="name"
                    value = {form.name}
                    placeholder='Name include...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="number" 
                    name="ratingMin"
                    value = {form.ratingMin}
                    placeholder='Minimum rating...'
                    onChange={handleChange}
                />
                <FilterPanelInput 
                    type="number" 
                    name="ratingMax"
                    value = {form.ratingMax}
                    placeholder='Maximum rating...'
                    onChange={handleChange}
                />
                <FilterPanelButtonWrapp>
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
                </FilterPanelButtonWrapp>
                <FilterPanelButtonWrapp>
                    <FilterPanelButton onClick={resetFields}>
                        Clear fields
                    </FilterPanelButton>
                    <FilterPanelButton onClick={handleCancel}>
                        Cancel/Close
                    </FilterPanelButton>
                    <FilterPanelButton onClick={handleExecute}>
                        Filter
                    </FilterPanelButton>
                </FilterPanelButtonWrapp>
            </FilterPanelWrapper>
        </>
    )
}

export default FilterPanel;