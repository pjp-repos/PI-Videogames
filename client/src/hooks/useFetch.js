import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () =>{
            // Loading....
            setLoading(true);
            try {
                // Petición Fetch
                const res = await fetch(url, options);
                // Hubo un error?
                if(!res.ok){
                    let err = new Error("Error en la petición fetch")
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrió un error";
                    throw err;
                }
                // No hubo error
                const json = await res.json();
                // Si no hubo aborto de proceso por abort controller..
                // actualizar la data en el estado y resetear el estado error
                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                // Si el error no es por abort controller...
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            } finally{
                if(!signal.aborted){
                    // Done....
                    setLoading(false);
                }
            }
        }
        // Ejecución de la función asíncrona
        fetchData();

        return ()=>abortController.abort();
    },[url]);
    // Objeto retornado por el hook useFetch
    return {data,error,loading}
}