
// Field "name" of element is exact value
export const filterCbNameCs = function(el){
    return el.name===this || this==="";
}

// Field "name" of element is exact value no case sensitive
export const filterCbName = function(el){
    return el.name.toLowerCase()===this.toLowerCase() || this==="";
}

// Field "name" of element is included in value - CS
export const filterCbNameIncludeCs = function(el){
    return el.name.includes(this) || this==="";
}

// Field "name" of element is included in value - no CS
export const filterCbNameInclude = function(el){
    return el.name.toLowerCase().includes(this.toLowerCase()) || this==="";
}

// Field "rating" of element is higher than value
export const filterCbRatingMin = function(el){
    return el.rating >= this || this===0;
}

// Field "rating" of element is less than value
export const filterCbRatingMax = function(el){
    return el.rating <= this || this===0;
}

// Any of values in "value" array, exists in array el.genres.id
export const filterCbGenres = function(el){
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
    return scanArrays(el.genres, this, 0, 0);
}

// Any of values in "value" array, exists in array el.platforms.platform.id
export const filterCbPlatforms = function(el){
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
    return scanArrays(el.platforms, this, 0, 0);
}
