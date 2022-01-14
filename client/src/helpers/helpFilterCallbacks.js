
// Field "name" of element is exact value
export const filterCbNameCs = (el,param) =>{
    return el.name===param || param==="";
}

// Field "name" of element is exact value no case sensitive
export const filterCbName = (el,param) =>{
    return el.name.toLowerCase()===param.toLowerCase() || param==="";
}

// Field "name" of element is included in value - CS
export const filterCbNameIncludeCs = (el,param) =>{
    return el.name.includes(param) || param==="";
}

// Field "name" of element is included in value - no CS
export const filterCbNameInclude = (el,param) =>{
    return el.name.toLowerCase().includes(param.toLowerCase()) || param==="";
}

// Field "rating" of element is higher than value
export const filterCbRatingMin = (el,param) =>{
    return el.rating >= param || param==="";
}

// Field "rating" of element is less than value
export const filterCbRatingMax = (el,param) =>{
    return el.rating <= param || param==="";
}

// Any of values in "value" array, exists in array el.genres.id
export const filterCbGenres = (el,param) =>{
    const scanArrays = (array1,array2,i1,i2)=>{
        if(array2.length===0) return true; // There is no filter
        if(array1.length===0) return false; // There is filter but there is no data in array
        if(array1[i1].id===array2[i2]) return true;
        if(i1===array1.length-1 && i2===array2.length-1) return false;
        if(i2===array2.length-1){
            i1=i1+1;
            i2=0;
        }else{
            i2=i2+1;
        } 
        return scanArrays(array1,array2,i1,i2);
    }
    return scanArrays(el.genres, param, 0, 0);
}

// Any of values in "value" array, exists in array el.platforms.platform.id
export const filterCbPlatforms = (el,param) =>{
    const scanArrays = (array1,array2,i1,i2)=>{
        if(array2.length===0) return true; // There is no filter
        if(array1.length===0) return false; // There is filter but there is no data in array
        if(array1[i1].platform.id===array2[i2]) return true;
        if(i1===array1.length-1 && i2===array2.length-1) return false;
        if(i2===array2.length-1){
            i1=i1+1;
            i2=0;
        }else{
            i2=i2+1;
        } 
        return scanArrays(array1,array2,i1,i2);
    }
    return scanArrays(el.platforms, param, 0, 0);
}
