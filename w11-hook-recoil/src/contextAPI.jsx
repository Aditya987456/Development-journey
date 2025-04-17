//creating a context api  --> for counter application...
//it also re-renders the component that not changes...

//context api --> three steps:   1.create context   ||   2.make provider   ||   3.consume context
import { useState, useContext, createContext } from "react";

//  1.Create context...

const CountContext=createContext()

const ContextAPI=({children})=>{

    const [count, setCount]=useState(0)
//   2. make provider

    return(
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    )
}




export function Appp() {

    return(
      <ContextAPI>
        <CurrentVal/>
        <Increase/>
        <Decrease/>
      </ContextAPI>
    )
    
  }
  
  
  
  
  
  
  
  
  const Increase=()=>{
    const { setCount } = useContext(CountContext)
  
    function increaseCount() {
      setCount(c=>c+1)
    }
  
    return <div>
      <button onClick={increaseCount}>INCREASE</button>
    </div>
  
  }
  
  
  const Decrease=()=>{
    const { setCount } = useContext(CountContext)
  
    function decreaseCount() {
      setCount(c=>c-1)
    }
  
    return <div>
      <button onClick={decreaseCount}>DECREASE</button>
    </div>
  
  }
  
  
  
  const CurrentVal=()=>{
    const { count } = useContext(CountContext)
  
    return <div>{count}</div>
  
  }