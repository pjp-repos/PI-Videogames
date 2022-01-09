import {useState} from 'react';
import {helpHttp} from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const {post} = helpHttp();

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
            setLoading(true);
            
            // helpHttp()
            post('https://formsubmit.co/ajax/pj.pavon@gmail.com',{
                body: form,
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json" 
                }
            })
            .then((res)=>{
                setLoading(false);
                setResponse(true);
            })
        }else{
            return;
        }

    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleChangeMult,
        handleBlur,
        handleBlurMult,
        handleSubmit
    }
}
