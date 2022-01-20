export const helpRegexValidate = (type,data)=>{
    let regexChNuBl = /^[A-Za-z0-9\s]+$/;
    let regexChNuBlDo = /^[A-Za-z0-9\s.]+$/;
    let regexChNuBlEs = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexChNuBlDoEs = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.]+$/;
    let regExDate = /^\d{4}-\d{2}-\d{2}$/;
    let regExUrlHttp = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    let regExFloat = /^\d*\.?\d*$/;

    switch(type){
        case 'Date':
            console.log(data)
            return regExDate.test(data);

        case 'ChNuBl':
            return regexChNuBl.test(data);

        case 'ChNuBlDo':
            return regexChNuBlDo.test(data);

        case 'ChNuBlEs':
            return regexChNuBlEs.test(data);

        case 'ChNuBlDoEs':
            return regexChNuBlDoEs.test(data); 

        case 'UrlHttp':
            return regExUrlHttp.test(data); 

        case 'Float':
            return regExFloat.test(data); 

        default:
            return false;
    }

}