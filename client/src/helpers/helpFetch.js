export const helpFetch = async (url, dataCb, loadingCb,  errorCb, options={})=>{
    loadingCb(true);

    // --- Options -----------------------------
    
    // - Abort controller
    const abortController = new AbortController();
    const signal = abortController.signal;
    options.signal = signal;
    // setTimeout(() => abortController.abort(), 10000);

    // - Method
    options.method = options.method || "GET";

    // - Headers
    const defaultHeader = {
        accept: "application/json",
    };
    options.headers = options.headers
    ? { ...defaultHeader, ...options.headers }
    : defaultHeader;

    // - Body
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

     try {
        const res = await fetch(url, options);
        if(!res.ok){
            let err = new Error("Error en la petición fetch")
            err.status = res.status || "00";
            err.statusText = res.statusText || "Ocurrió un error";
            throw err;
        }

        const json = await res.json();
        
        if(!signal.aborted){
            dataCb(json);
            errorCb({status:false,statusText:""})
        }

    } catch (err) {
        if(!signal.aborted){
            errorCb({status:err.status,statusText:err.statusText})
        }else{
            errorCb({status:err.code,statusText:err.message})
        }
    } finally{
        loadingCb(false);
    }
}
