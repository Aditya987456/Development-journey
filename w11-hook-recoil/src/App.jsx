import { useContext, useEffect, useState } from 'react'





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

// import { useFetch } from './hooks/useFetch';

// function App() {

//   const [num, setNum]=useState(1)

//   //calling cutom hook to take data...+ url+ time for retrying in second.
//   const retryTime=2    
//   const { posts, loading }=useFetch('https://jsonplaceholder.typicode.com/posts/'+num , retryTime)

//   if (loading) {
//     return <div>LOADING...</div>
//   }


//   return (
//     <div>

//       <button onClick={()=>{setNum(1)}}>task-1</button>
//       <button onClick={()=>{setNum(2)}}>task-2</button>
//       <button onClick={()=>{setNum(3)}}>task-3</button>
//       <button onClick={()=>{setNum(4)}}>task-4</button>

//       <p>{JSON.stringify(posts)}</p>  
     
//     </div>
//   ) 
// }

console.log('\n')










// ###########--------------------------------  usePrev hook  -----------------------------###############

// import { useprev } from './hooks/useprev'


// function App() {

//   const [count, setCount ]=useState(0)

//   let previousVal=useprev(count)


//   return(
//     <div>
//       <h1>Counter with usePrev custom hook</h1>
//       <div>Current value : {count}</div>
//       <div>Previous value : {previousVal}</div>
//       <button onClick={()=>{ setCount(c=>c+1) } }>increment</button>
//       <button onClick={()=>{ setCount(c=>c-1) } }>decrement</button>
//     </div>
//   )
  
// }

console.log('\n')











// ###########--------------------------------  useDebounce hook  -----------------------------###############

// import { debounceHook } from './hooks/debounce'

// function App() {

//   const [text, setText ]=useState("")


//   //here if the text input is change then rerender happens becz of the setText and then ..
//   function Change(e) {
//     setText(e.target.value)
//   }


// /* --------------------------------------IMPORTANT POINTS -------------------------------------------------
// and the DebounceValue take the input from debounce hook which gives input after the delay time i.e typing is delay for
// specified time therefor debouncehook gives result i.e ---> we have to useEffect hook which will we called only 
// if the delaytime exceed during typing that means now we have to make call to backend
// $$$  that is we use debounce hook that helps to not directly calls the expensive operations just wait for some time then call
// */

// const delaytime=200
//   const DebounceValue=debounceHook(text, delaytime)


//   useEffect( ()=>{
//   // Perform API call or any action here with debouncedValue  --> i.e here now run the expensive operations...
//   //only when debounce value will change
//     console.log('backend request --> expensive operations...') 
  

//   },[DebounceValue])




//   return (

//     <div>
//       <input type="text"  onChange={Change} placeholder='search here'/>
//       <button>Search</button>
//       <div>{DebounceValue}</div>
//     </div>
//   )
  
// }


console.log('\n')









//----------------*****---*****--------------  RECOIL in react ------------------------------------------------

//  even if we use context api then it will helps to avoid props drilling but not helps to minimize the unnecessary renders...
//  ####   contextApi    v/s     Recoil

console.log('firstly testing with context Api.')
// context api...
// import { Appp } from './contextAPI'

// function App() {


//   return(
//    <div>
//     <Appp/>
//    </div>
//   )
// }





console.log('Now using recoil....')

//  ----------------***    recoil    ****------------

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { CounterAtom } from './store/atoms/counter'



function App() {


  return(
    <RecoilRoot>

      
      <Increase/>
      <Decrease/>
      <CurrentVal/>

    </RecoilRoot>
  )
}




const Increase=()=>{
  const setValue=useSetRecoilState(CounterAtom)  // write only state -->  not subscribes only setter...

  return <div>
    <button onClick={ ()=>{ setValue(c=>c+1 )} }>Increase</button>

  </div>
}


const Decrease=()=>{
  const setValue=useSetRecoilState(CounterAtom)  // write only state -->  not subscribes only setter...

  return <div>
    <button onClick={()=>{ setValue(c=>c-1 )} }>Decrease</button>
    
  </div>
}


const CurrentVal=()=>{
 
    const value = useRecoilValue(CounterAtom);
   // console.log("Current Value:", value); // Debugging log
   
    return <div>{value}</div>;
 

}

































export default App;