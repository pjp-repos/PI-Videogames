// Imports
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import {
    addGame,
    addGameLoading,
    addGameError,
    setModal
} from '../../../redux/actions/actionsGames';

// Custom hooks
import { useFilter } from '../../../hooks/useFilter';

//Helpers
import { helpFieldValidate } from '../../../helpers/helpFieldValidate';
import {helpFetch} from '../../../helpers/helpFetch';

// Styled components
import { 
    CreateFormWrapper,
    CreateFromInput,
    CreateFormTextArea,
    CreateFormError,
 } from './CreateFormElements';
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import { Button } from '../../AaaGenerics/Button/Button';

// Filed names width default values
const initialForm = {
    name:"",
    released:"",
    background_image:"",
    rating:"",
    description_raw:"",
    genres:[],
    platforms:[]
};

// Field validations callback for useForm 
const validationsForm = (form)=>{
    let errors={};
    // name:
    if(!form.name.trim()){
        errors.name="Name is required";
    }else if(!helpFieldValidate('ChNuBlEs',form.name.trim())){
        errors.name="Name only acepts characters and numbers";
    }
    // released:
    if(!form.released.trim()){
        errors.released="Released date is required";
    }else if(!helpFieldValidate('Date',form.released.trim())){
        errors.name="Invalid date format";
    }
    // background_image
    if(!form.background_image.trim()){
        errors.background_image="Image url is required";
    }else if(!helpFieldValidate('UrlHttp',form.background_image.trim())){
        errors.background_image="Invalid url. It must start width http/https.";
    }
    // rating"""
    if(!form.rating.trim()){
        errors.rating="Rating is required";
    }else if(!helpFieldValidate('Float',form.rating.trim())){
        errors.rating="Invalid number.";
    }
    // description_raw:
    if(!form.description_raw.trim()){
        errors.description_raw="Description is required";
    }else if(!helpFieldValidate('ChNuBlDoEs',form.description_raw.trim())){
        errors.description_raw="Invalid simbols";
    }
    // genres:
    if(form.genres.length===0){
        errors.genres="Chose one genre at least";
    }
    // platforms:
    if(form.platforms.length===0){
        errors.platforms="Chose one platform at least";
    }

    return errors;
};

const CreateForm = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    
    const dataCb = (data)=>dispatch(addGame(data));
    const loadingCb = (value)=>dispatch(addGameLoading(value));
    const errorCb = (errorObj)=>dispatch(addGameError(errorObj));
    
    const closeModal = ()=>dispatch(setModal({modal:'createForm', value:false}));

    // Submit form callback for useForm
    const submitForm= (form)=>{ 
        helpFetch(`http://localhost:3001/videogame`, dataCb, loadingCb, errorCb,{
            headers:{
                "Content-Type": "application/json"
            },
            method:'POST',
            body:form
        });    
    };

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

    // custom hook useForm
    const {        
        form,
        errors,
        handleChange,
        handleDropdown,
        handleSubmit,
        resetFields
    } = useFilter(initialForm, validationsForm, submitForm);

    const handleExecute= ()=>{
        if(handleSubmit()){
            resetFields();
            closeModal();
        }
    };
    
    if(
        state.games.loadings.genres 
        || state.games.loadings.genres
        || state.games.loadings.platforms
        || state.games.loadings.addGame
    ) return null;

    return (
        <>
            <CreateFormWrapper>
                {/* Game name field */}
                <CreateFromInput 
                    type="text" 
                    name="name"
                    placeholder='Write the name of the game...'
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <CreateFormError>
                    {errors.name && errors.name}
                </CreateFormError>

                {/* Released date field */}
                <CreateFromInput 
                    type="date" 
                    name="released"
                    placeholder='Type released date...'
                    value={form.released}
                    onChange={handleChange}
                    required
                />
                <CreateFormError>
                    {errors.released && errors.released}
                </CreateFormError>
 
                {/* Background image field */}
                <CreateFromInput 
                    type="url" 
                    name="background_image"
                    placeholder='Type the image url...'
                    value={form.background_image}
                    onChange={handleChange}
                    required
                />
                <CreateFormError>
                    {errors.background_image && errors.background_image}
                </CreateFormError>

                {/* Rating field */}
                <CreateFromInput 
                    type="number" 
                    name="rating"
                    placeholder='Type rating...'
                    value={form.rating}
                    onChange={handleChange}
                    required
                />
                <CreateFormError>
                    {errors.rating && errors.rating}
                </CreateFormError>

                {/* Description field */}
                <CreateFormTextArea
                    name="description_raw"
                    placeholder='Type description..'
                    value={form.description_raw}
                    onChange={handleChange}
                    required
                />
                <CreateFormError>
                    {errors.description_raw && errors.description_raw}
                </CreateFormError>

                {/* Genres select dropdown */}
                <Dropdown 
                    titleOn="Genres"
                    titleOff="Close"
                    options={genres}
                    multiple={true}
                    
                    fieldName='genres'
                    fieldValue={form.genres}
                    dropdownCb={handleDropdown}
                />
                <CreateFormError>
                    {errors.genres && errors.genres}
                </CreateFormError>

                {/* Platforms select dropdown */}
                <Dropdown 
                    titleOn="Platforms"
                    titleOff="Close"
                    options={platforms}
                    multiple={true}
                    
                    fieldName='platforms'
                    fieldValue={form.platforms}
                    dropdownCb={handleDropdown}
                />
                <CreateFormError>
                    {errors.platforms && errors.platforms}
                </CreateFormError>
               
                <Button onClick={handleExecute}>
                    Submit
                </Button>
                <Button onClick={closeModal}>
                    Cancel/Close
                </Button> 
                <Button onClick={resetFields}>
                    Clear fields
                </Button> 
            </CreateFormWrapper>        
        </>
    )   
}

export default CreateForm;
