import { useState, useEffect } from "react";


function Counter() {

    const [count, setCount]=useState( ()=>{
        const counterValue=localStorage.getItem('count')
        //$$$ since parseint has radix=10  becz we are dealing in decimal not in binary,octal etc
        return counterValue? parseInt(counterValue,10) : 0
    });

//$$$$$$$$$$ useEffect will be used whenever the count will update--->  to store th count value in localstorage

    useEffect(()=>{
        localStorage.setItem('count',count)
    },[count])


    const increment=()=>{
        setCount( (prevcnt)=>{
            return prevcnt+1
        })
    }


    const decrement=()=>{
        setCount((prevcnt)=>prevcnt-1)
        
    }


    const reset=()=>{
        setCount(0)
        
    }



    return(

        <div>
            <div>

                
                <div>{count}</div>
                <button onClick={increment}>increment </button>
                <button onClick={decrement}> decrement</button>
                <button onClick={reset}> reset</button>

            </div>

        </div>



    )   
}


export default Counter;