import { useEffect, useState } from "react";

//debounce hook--> delay the execution of a function until specified amount of time.
export const debounceHook=(text, delaytime)=>{

    const [debounceVAL, setDebounceVAL]=useState(text)
    

    
    useEffect( ()=>{
        const timeoutID = setTimeout(() => {
            setDebounceVAL(text)
            
        }, delaytime);

        return ()=>{
            clearTimeout(timeoutID)}
        

    }, [text,delaytime])






    return debounceVAL;


}