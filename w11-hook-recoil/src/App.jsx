import { useState } from 'react'




//------------------ ## Creating Custom hook   ------------------
//  useCounter custom hook-


//custom hook  --->  JS function that can use React hooks internally ....
function useCounter() {
  const [ count, setCount ]= useState(0)

  function IncreaseCounter() {
    setCount(c=>c+1)
  }

  return {
    countValue:count,
    IncreaseCounter:IncreaseCounter
  }

}



//now component is very clean... after making a new component counter app that will handle with my custom hook here i just use component.<counterApp/>

function App() {
  
  return(
    <div>
      <CounterApp/>
      <CounterApp/>
      <CounterApp/>
      <CounterApp/>

      {/*here all 4 have different ** independent variable **  here can use multiple component but value on each counter is separate i.e not affect on others. */}
      
    </div>
  )  
}


function CounterApp() {
  const {countValue, IncreaseCounter}=useCounter()

  return (
    <div>
      <button onClick={IncreaseCounter} >Increase value = {countValue}</button>
    </div>
  )
  
}



















export default App;