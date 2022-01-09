import { useState } from "react";

export const useModal = (initialValue=false)=>{
    const [isOpen,setIsOpen] = useState(initialValue);
    const [params,setParams] = useState({});

    const openModal = (params={})=>{
        setParams(params);
        setIsOpen(true);
    } 
    const closeModal = ()=> setIsOpen(false);

    return {isOpen, params, openModal, closeModal};
}