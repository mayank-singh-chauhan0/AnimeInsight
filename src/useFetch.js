import { useState, useEffect } from "react";
const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)   //loading message
   const[error,setError]=useState(null);
    useEffect(()=>{
        const abortCont=new AbortController();  
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
         .then(res=>{
           
            if(!res.ok){// when server did not gave the response the this is error check
              throw Error('could not fetch data');
            }
            return res.json();
         })
         .then(data=>{
            // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
         }) 
         .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted')
            }else{
                setIsPending(false);
                setError(err.message);
            }
        
         })
    
        }, 1000);
        return()=> abortCont.abort();
        },[url]);
        return{data, isPending,error}
}
export default useFetch;