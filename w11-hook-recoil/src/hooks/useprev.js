import { useEffect, useRef } from "react";


export const useprev=(value)=>{

    const currentVal=useRef()

    useEffect( ()=>{
        currentVal.current=value

    },[value])  // prev val only update when the value changes...


//###$$$$$ here according to react nature firstly it will return the value currentVal that is old val then it goes in useEffect hook and update the 
//          currentVal if the [value] changes....

    return currentVal.current;

}
