
import { useEffect, useRef, useState } from 'react'
import './App.css'



// // ***************   W-16.1  classes    **********************
// function App() {
  

// const [ socket, setSocket ]=useState();
// const inputMessage=useRef();

// function SendMessage() {
//   if(!socket) return

  
//   const messages=inputMessage.current.value;
//   //@ts-ignore
//   socket.send(messages)
// }



// //connecting to websocket --> on mounting only.

// useEffect( ()=>{

//   const ws=new WebSocket('ws://localhost:8080');
//   setSocket(ws)

//   ws.onmessage=( (ev)=>{
//     alert(ev.data)
//   })
  
// },[])





//   return (
//     <>
      
//       <input ref={inputMessage} type='text' placeholder="Enter message here" />
//       <button onClick={SendMessage} style={{margin:8}}>SEND</button>
      
//     </>
//   )
// }












//*************-----------------   chat - app     -----------------*********************** */

function App() {




  const [messages, setMessages]=useState(['hello ji']);

  const InputRef=useRef()

  const wsRef=useRef()





  //connect on mounting...
  useEffect( ()=>{
    const ws=new WebSocket('ws://localhost:8080');

    ws.onmessage=(event)=>{
      setMessages(m=>[...m, event.data])
    }

    wsRef.current=ws;


    //----only after coonected with server....----
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type:'join',
        payload:{
          roomId:'123'
        }
      }))
    }

  },[])



  function InputContentMsg() {
    const inputBoxValue=InputRef.current.value;

    wsRef.current.send(JSON.stringify({
      type:'chat',
      payload:{
        message:inputBoxValue
      }
    }))

    
  }






  return(
    
    <div className='h-[100vh] bg-black'>

        <div className='h-[88vh]'>

            {messages.map(msg=>
              <div className='p-8'>
                <span className='bg-white rounded p-4'>
                   {msg} </span>
              </div>)}
          
        </div>





        <div>
          <span className='flex justify-center '>

          <input ref={InputRef} className=' bg-violet-200 rounded py-1 px-20 text-black' placeholder='Enter your message here!'></input>

          <button className='bg-violet-600 hover:bg-violet-900 p-4 rounded m-2 text-white font-xl'
            onClick={ InputContentMsg }
           >SEND MESSAGE</button>
          </span>
        </div>


      
    </div>
  
  )
  
}



export default App
