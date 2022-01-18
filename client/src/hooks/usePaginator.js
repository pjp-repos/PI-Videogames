import { useState } from "react";

export const usePaginator = (totalElements,elementsFirstPage,elementsPerPage, paginatorCb=false, resetPage)=>{
    const [page,setPage] = useState(1);
    const [reset,setReset] = useState(resetPage);
    
    // Max pages calculation
    let maxPages = Math.ceil(
        totalElements<=elementsFirstPage ? 1 
        : ((totalElements-elementsFirstPage)/elementsPerPage)+1
    )
    // Reset page in filters
    if(page>maxPages || reset!==resetPage){
        if(page!==1) setPage(1);
        setReset(resetPage);
    }

    // Page list 
    let pageList = [...Array(maxPages+1).keys()]
    pageList.shift();

    // ======= Events =================
    const handlePrevious = (e)=>setCurrentPage(page-1);
    const handleNext = (e)=>setCurrentPage(page+1);
    const handleSelect = (e)=>setCurrentPage(parseInt(e.target.value));

    const setCurrentPage = (currentPage)=>{
        if(currentPage>=1 && currentPage <=maxPages){
            setPage(currentPage);
            if(paginatorCb!==false){
                paginatorCb(currentPage);
            }
        }  
    }; 
  
    let isFirst = page===1?true:false;
    let isLast = page===maxPages?true:false;

    return {
        page, 
        maxPages, 
        pageList,
        isFirst, 
        isLast, 
        handlePrevious,
        handleNext,
        handleSelect
    };
}