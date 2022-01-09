import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { useForm } from '../../../hooks/useForm';
import { helpFieldValidate } from '../../../helpers/helpFieldValidate';
import helpApiKey from '../../../helpers/helpApiKey';

import { 
    CreateFromForm,
    CreateFromInput,
    CreateFormSelect,
    CreateFormOption,
    CreateFormTextArea,
    CreateFormError
 } from './CreateFormElements';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner';


const initialForm = {
    name:"",
    released:"",
    image:"",
    rating:"",
    description:"",
    genres:[],
    platforms:[]
};

const validationsForm = (form)=>{
    let errors={};

    if(!form.name.trim()){
        errors.name="Name is required";
    }else if(!helpFieldValidate('ChNuBlEs',form.name.trim())){
        errors.name="Name only acepts characters and numbers";
    }

    if(!form.released.trim()){
        errors.released="Released date is required";
    }else if(!helpFieldValidate('Date',form.released.trim())){
        errors.name="Invalid date format";
    }

    if(!form.image.trim()){
        errors.image="Image url is required";
    }else if(!helpFieldValidate('UrlHttp',form.image.trim())){
        errors.image="Invalid url. It must start width http/https.";
    }

    if(!form.rating.trim()){
        errors.rating="Rating is required";
    }else if(!helpFieldValidate('Float',form.rating.trim())){
        errors.rating="Invalid number.";
    }

    if(!form.description.trim()){
        errors.description="Description is required";
    }else if(!helpFieldValidate('ChNuBlDoEs',form.description.trim())){
        errors.description="Invalid simbols";
    }

    if(form.genres.length===0){
        errors.genres="Chose one genre at least";
    }

    if(form.platforms.length===0){
        errors.platforms="Chose one platform at least";
    }

    return errors;
};


const CreateForm = () => {
    let apiKey = helpApiKey();
    const genres = useFetch(`https://api.rawg.io/api/genres?key=${apiKey}`);
    const platforms = useFetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);

    const loadingSelects = genres.loading || platforms.loading;

    const {        
        form,
        errors,
        loading,
        response,
        handleChange,
        handleChangeMult,
        handleBlur,
        handleBlurMult,
        handleSubmit
    } = useForm(initialForm, validationsForm);
    
    if(loadingSelects) return <Spinner/>;
    return (
        <>
            <CreateFromForm action ={'d0a4c5cda45898c3229fa0335cef2bdf'} onSubmit={handleSubmit}>
                <CreateFromInput 
                    type="text" 
                    name="name"
                    placeholder='Write the name of the game...'
                    // value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.name && <CreateFormError>{errors.name}</CreateFormError>}

                <CreateFromInput 
                    type="date" 
                    name="released"
                    placeholder='Type released date...'
                    // value={form.released}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                 {errors.date && <CreateFormError>{errors.date}</CreateFormError>}

                <CreateFromInput 
                    type="url" 
                    name="image"
                    placeholder='Type the image url...'
                    // value={form.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    />
                {errors.image && <CreateFormError>{errors.image}</CreateFormError>}
                
                <CreateFromInput 
                    type="number" 
                    name="rating"
                    placeholder='Type rating...'
                    // value={form.rating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    />
                {errors.rating && <CreateFormError>{errors.rating}</CreateFormError>}

                <CreateFormTextArea
                    name="description"
                    placeholder='Type description..'
                    // value={form.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    />
                {errors.description && <CreateFormError>{errors.description}</CreateFormError>}

                <CreateFormSelect 
                    name="genres"
                    // value={form.genres}
                    multiple
                    onChange={handleChangeMult}
                    onBlur={handleBlurMult}
                    required
                    >
                    {
                        genres.data.results.map((el)=>
                        <CreateFormOption key={el.id} value={el.id}>
                                {el.name}
                            </CreateFormOption>
                        )
                    }
                </CreateFormSelect>
                {errors.genres && <CreateFormError>{errors.genres}</CreateFormError>}

                <CreateFormSelect 
                    name="platforms"
                    // value={form.platforms}
                    multiple
                    onChange={handleChangeMult}
                    onBlur={handleBlurMult}
                    required
                    >
                    {
                        platforms.data.results.map((el)=>
                        <CreateFormOption key={el.id} value={el.id}>
                                {el.name}
                            </CreateFormOption>
                        )
                    }
                </CreateFormSelect>
                {errors.platforms && <CreateFormError>{errors.platforms}</CreateFormError>}

                <CreateFromInput 
                    type="submit" 
                    value="Submit"
                />
            </CreateFromForm>
        </>
    )   
}

export default CreateForm;
