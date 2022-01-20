import { useState } from "react";

export const useForm = (initialForm, validateForm, submitForm)=>{
    
    const [form,setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    //const [error, setError] = useState(false);

    // Events delegates
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleDropdown = (fieldName,value) =>{
        setForm({
            ...form,
            [fieldName]:value
        });
    };
    
    const handleSubmit = (resetFields=false) =>{
        const auxErrors = validateForm(form)
        setErrors(auxErrors);
        if(Object.keys(auxErrors).length===0){
            submitForm(form);
            if(resetFields) setForm(initialForm);
            return true;
        }
        return false;
    };

    const resetFields = ()=>{
        setForm(initialForm);
        setErrors({});
    }

    return {
        form,
        errors,
        handleChange,
        handleDropdown,
        handleSubmit,
        resetFields
    };
}

