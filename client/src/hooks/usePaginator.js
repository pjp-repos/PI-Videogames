import { useState } from "react";

export const usePaginator = (totalElements,elementsFirstPage,elementsPerPage)=>{
    const [page,setPage] = useState(1);
    
    // Max pages calculation
    let maxPages = Math.ceil(
        totalElements<=elementsFirstPage ? 1 
        : ((totalElements-elementsFirstPage)/elementsPerPage)+1
    )
    
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
        }      
    }; 

    let lastIndex = page===1?elementsFirstPage: elementsPerPage*page+(elementsFirstPage-elementsPerPage)
    let firstIndex = page===1?0: lastIndex-elementsPerPage;
  
    let isFirst = page===1?true:false;
    let isLast = page===maxPages?true:false;



    return {
        page, 
        maxPages, 
        pageList,
        firstIndex, 
        lastIndex,  
        isFirst, 
        isLast, 
        handlePrevious,
        handleNext,
        handleSelect
    };
}