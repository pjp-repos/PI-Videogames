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
import { useForm } from '../../../hooks/useForm';

//Helpers
import { helpRegexValidate } from '../../../helpers/helpRegexValidate';
import {helpFetch} from '../../../helpers/helpFetch';

// Styled components
import { 
    CreateFormWrapper,
    CreateFormInput,
    CreateFormButton,
    CreateFormButtonWrapp,
    CreateFormError,
 } from './CreateFormElements';
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import { H3 } from '../../AaaGenerics/Texts/Hx';

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
    const name = form.name.trim()
    if(!name){
        errors.name="Name is required";
    }else if(!helpRegexValidate('ChNuBlEs',name)){
        errors.name="Name only acepts characters and numbers";
    }


    // released:
    const released = form.released.trim()
    let d = new Date(released);
    let dNum = d.getTime();

    if(!released){
        errors.released="A valid released date is required";
    }else if(!helpRegexValidate('Date',released)){
        errors.released="Invalid date format";
    }else if (!dNum && dNum !== 0){
        errors.released="Invalid date";
    }else if (!d.toISOString().slice(0,10) === released){
        errors.released="Invalid date";        
    }


    // background_image
    const background_image = form.background_image.trim();
    if(!background_image){
        errors.background_image="Image url is required";
    }else if(!helpRegexValidate('UrlHttp',background_image)){
        errors.background_image="Invalid url. It must start width http/https.";
    }


    // rating
    const rating = form.rating.trim()
    if(!rating){
        errors.rating="Rating is required";
    }else if(!helpRegexValidate('Float',rating)){
        errors.rating="Invalid number.";
    }else if(parseFloat(rating)<0 || parseFloat(rating)> 5){
        errors.rating="Ranking must be higer than 0 and lower than 5.";
    }


    // description_raw:
    const description = form.description_raw.trim()
    if(!description){
        errors.description_raw="Description is required";
    }else if(!helpRegexValidate('ChNuBlDoEs',description)){
        errors.description_raw="Invalid simbols";
    }else if(description.length<2 || description.length>255){
        errors.description_raw="Description must have more than 1 character and lower than 255.";
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
    } = useForm(initialForm, validationsForm, submitForm);

    const handleExecute= ()=>{
        if(handleSubmit(true)){
            closeModal();
        }
    };
    
    const handleCancel = ()=>{
        resetFields();
        closeModal();
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
                <H3>New game form</H3>
                {/* Game name field */}
                <CreateFormInput 
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
                <CreateFormInput 
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
                <CreateFormInput 
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
                <CreateFormInput 
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
                <CreateFormInput
                    name="description_raw"
                    placeholder='Type description..'
                    value={form.description_raw}
                    onChange={handleChange}
                    required
                />
                <CreateFormError>
                    {errors.description_raw && errors.description_raw}
                </CreateFormError>

                <CreateFormButtonWrapp>
                    {/* Genres select dropdown */}
                    <div>
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
                    </div>

                    {/* Platforms select dropdown */}
                    <div>
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
                    </div>
                </CreateFormButtonWrapp>          

               <CreateFormButtonWrapp>
                    <CreateFormButton onClick={resetFields}>
                        Clear fields
                    </CreateFormButton>
                    <CreateFormButton onClick={handleCancel}>
                        Cancel/Close
                    </CreateFormButton> 
                    <CreateFormButton onClick={handleExecute}>
                        Submit
                    </CreateFormButton>
               </CreateFormButtonWrapp>
            </CreateFormWrapper>        
        </>
    )   
}

export default CreateForm;
