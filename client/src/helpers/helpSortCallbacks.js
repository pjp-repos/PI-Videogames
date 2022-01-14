// sort by "name" Ascending
export const sortCbNameNcsAsc = (a,b) =>{
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }    
    
    return 0; // names must be equal
}

// sort by "name" Descending
export const sortCbNameNcsDesc = (a,b) =>{
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) {
        return 1;
    }
    
    if (nameA > nameB) {
        return -1;
    }    
    
    return 0; // names must be equal
}

// sort by "rating" Ascending
export const sortCbRatingAsc = (a,b) =>{
    return a.rating - b.rating;
}

// sort by "rating" Descending
export const sortCbRatingDesc = (a,b) =>{
    return b.rating - a.rating;
}

// sort by "released" Ascending
export const sortCbReleasedAsc = (a,b) =>{
    let dateA = a.released;
    let dateB = b.released;
    
    if (dateA < dateB) {
        return -1;
    }

    if (dateA > dateB) {
        return 1;
    }    
    
    return 0; 
}

// sort by "released" Descending
export const sortCbReleasedDesc = (a,b) =>{
    let dateA = a.released;
    let dateB = b.released;
    
    if (dateA < dateB) {
        return 1;
    }

    if (dateA > dateB) {
        return -1;
    }    
    
    return 0; 
}