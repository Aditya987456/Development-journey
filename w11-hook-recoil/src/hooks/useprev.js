import { useEffect, useRef } from "react";


export const useprev=(value)=>{

    const currentVal=useRef()

    useEffect( ()=>{
        currentVal.current=value

    },[value])  // prev val only update when the value changes...

    return currentVal.current;

}