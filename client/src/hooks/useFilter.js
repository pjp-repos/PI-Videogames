import { useState } from "react";

//,filterCb,data,dispatchFilter, closeModal=false
export const useFilter = (initialFilter)=>{
    
    const [filter,setFilter] = useState(initialFilter);

    // Events delegates
    const handleChange = (e) =>{
        setFilter({
            ...filter,
            [e.target.name]:e.target.value
        });
    };
    
    const handleChangeMult = (e) =>{
        setFilter({
            ...filter,
            [e.target.name]:Array.from(e.target.selectedOptions, option => parseInt(option.value))
        });
    };

    const resetFilter = ()=>{
        setFilter(initialFilter);
    }

    return {
        filter,
        handleChange,
        handleChangeMult,
        resetFilter
    };
}

