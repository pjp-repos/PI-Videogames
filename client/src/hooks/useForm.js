import {useState} from 'react';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(false);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    };

    const handleChangeMult = (e) =>{
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setForm({
            ...form,
            [e.target.name]:value
        })
    };

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    };
    
    const handleBlurMult = (e) =>{
        handleChangeMult(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length===0){
            setError(false)
        }else{
            setError(true)
        }

    };

    return {
        form,
        errors,
        error,
        handleChange,
        handleChangeMult,
        handleBlur,
        handleBlurMult,
        handleSubmit
    }
}
