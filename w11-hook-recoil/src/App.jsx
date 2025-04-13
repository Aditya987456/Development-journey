import { useState } from 'react'




//------------------ ## Creating Custom hook   ------------------
//  useCounter custom hook-

console.log('\n')
//custom hook  --->  JS function that can use React hooks internally ....
// function useCounter() {
//   const [ count, setCount ]= useState(0)

//   function IncreaseCounter() {
//     setCount(c=>c+1)
//   }

//   return {
//     countValue:count,
//     IncreaseCounter:IncreaseCounter
//   }

// }


// //now component is very clean... after making a new component counter app that will handle with my custom hook here i just use component.<counterApp/>

// function App() {
  
//   return(
//     <div>
//       <CounterApp/>
//       <CounterApp/>
//       <CounterApp/>
//       <CounterApp/>

//       {/*here all 4 have different ** independent variable **  here can use multiple component but value on each counter is separate i.e not affect on others. */}
      
//     </div>
//   )  
// }


// function CounterApp() {
//   const {countValue, IncreaseCounter}=useCounter()

//   return (
//     <div>
//       <button onClick={IncreaseCounter} >Increase value = {countValue}</button>
//     </div>
//   )
  
// }

console.log('\n')








// import { usefetchPost } from './hooks/useFetch';

// //----------------------------------#######      useFetch hook - normally       **-----------------------------------
// function App() {
// const title=usefetchPost()

//   return (
//     <div>
//       <div>Title -- {title}</div>
//     </div>
//   )
  
// }

console.log('\n')













//-------------------------**       useFetch hook --->  take url as i/p      **-----------------------------------

import { useFetch } from './hooks/useFetch';

function App() {

  const [num, setNum]=useState(1)

  //calling cutom hook to take data...+ url+ time for retrying in second.
  const retryTime=2    
  const { posts, loading }=useFetch('https://jsonplaceholder.typicode.com/posts/'+num , retryTime)

  if (loading) {
    return <div>LOADING...</div>
  }



  return (
    <div>

      <button onClick={()=>{setNum(1)}}>task-1</button>
      <button onClick={()=>{setNum(2)}}>task-2</button>
      <button onClick={()=>{setNum(3)}}>task-3</button>
      <button onClick={()=>{setNum(4)}}>task-4</button>

      <p>{JSON.stringify(posts)}</p>  
     
    </div>
  ) 
}






















export default App;