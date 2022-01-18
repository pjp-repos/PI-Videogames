import { useState } from "react";

export const useFilter = (initialForm, validateForm, submitForm)=>{
    
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
    
    const handleSubmit = () =>{
        const auxErrors = validateForm(form)
        setErrors(auxErrors);
        if(Object.keys(auxErrors).length===0){
            submitForm(form);
            return true;
        }
        return false;
    };

    const resetFields = ()=>{
        setForm(initialForm);
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

