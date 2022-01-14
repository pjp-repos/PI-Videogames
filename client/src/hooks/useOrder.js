import { useState } from "react";

export const useOrder = (initialOrder)=>{
    
    const [order,setOrder] = useState(initialOrder);

    // Events delegates
    const handleChange = (e) =>{
        setOrder(e.target.value);
    };
    
    const resetOrder = ()=>{
        setOrder(initialOrder);
    };

    return {
        order,
        handleChange,
        resetOrder
    };
}

