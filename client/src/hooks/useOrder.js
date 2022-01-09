import { useState } from "react";

export const useFilter = (initialFilter,filterCb,data)=>{
    
    const [filter,setFilter] = useState(initialFilter);
    const [dataFiltered, setDataFiltered] = useState(data);

    if(dataFiltered===false && data.length>0){
        setDataFiltered(data);
    }

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

    const handleExecute = (e)=>{
        const filterKeys = Object.keys(initialFilter);
        console.log(filter);
        let auxDataFiltered = data;
        filterKeys.forEach(key=>{
            auxDataFiltered = auxDataFiltered.filter(filterCb[key],filter[key])
        })
        setFilter(initialFilter);
        setDataFiltered(auxDataFiltered);
    }

    return {
        filter,
        dataFiltered,
        handleChange,
        handleChangeMult,
        handleExecute
    };
}

