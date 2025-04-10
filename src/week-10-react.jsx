//----------------------------------       WEEK-10 ---> react        -------------------------------------

import { useState,useEffect,useRef } from "react";
import { BrowserRouter, Route, Routes, Link  } from "react-router-dom";


// const Appp=()=>{


//     return(
//         <div>
//             <BrowserRouter>


//                 <Link to="/jee/admission"><button >JEE Admission</button></Link>
//                 <br />
//                 <br />
//                 <Link to="/neet/admission"><button >NEET Admission</button></Link>

//                 <Layout>
//                     <Routes>
//                         <Route path="/" element={<LandingPage/>}/>
//                         <Route path="/jee" element={<Jee/>}/>
//                         <Route path="/neet" element={<Neet/>}/>
//                         <Route path="/neet/admission" element={<Admission batch='neet' />}/>
//                         <Route path="/jee/admission" element={<Admission batch='jee' />}/>
//                     </Routes>
//                 </Layout>
//             </BrowserRouter>

//         </div>
//     )
// }



// const LandingPage=()=>{
    
//     return(
//         <div>
//             <h1>welcome to landing page Sir...</h1>
//         </div>
//     )

// }


// const Jee=()=>{
    
//     return(
//         <div>
//             <h1>welcome to JEE prep page Sir...</h1>
//         </div>
//     )

// }


// const Neet=()=>{
    
//     return(
//         <div>
//             <h1>welcome to NEET prep page Sir...</h1>
//         </div>
//     )

// }



// function Admission(props) {
//     return(
//         <div style={{height:400,
//             width:400,
//             borderRadius:10,
//             backgroundColor:'cornflowerblue',
//             display:"flex",
//             justifyContent:"center",
//             alignItems:"center",
//             margin:20,
//             flexDirection:"column",
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>

//                 <div><h1>Admission open</h1></div>
//                 <div><h3>{props.batch} batch-2025</h3></div>
               
            
//         </div>
//     )
    
// }



// const Header=()=>{
//     (
//         <div>
//              <nav>Header</nav>
//         </div>
//     )
// }

// const Footer=()=>{
//     return(
//         <div>
//              <nav>footer</nav>
//         </div>
//     )
   
// }


// function Layout({children}) {

//     return(
//         <div>
//             <header>headerssssss</header>
//             <main>{children}</main>
//             <footer>fooooooters</footer>
//         </div>
//     )
    
// }





//  nested layout like for user and admins alga alag-->  just for example.....
// const AdminLayout = ({ children }) => (
//     <div>
//       <header>Admin Header</header>
//       <main>{children}</main>
//       <footer>Admin Footer</footer>
//     </div>
//   );
  
//   const PublicLayout = ({ children }) => (
//     <div>
//       <header>Public Header</header>
//       <main>{children}</main>
//       <footer>Public Footer</footer>
//     </div>
//   );
  
//   const Dashboard = () => <h1>Admin Dashboard</h1>;
//   const HomePage = () => <h1>Home Page</h1>;
  
//   function App() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
//           <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }







//************************************ ###      useRef          ### *************************************/


// trying to create stop and start counter



//****  ######             Clock with start and stop functionality                      #######  */
// function Appp() {

//     const [count, setCount]=useState(0)
    
//     const timerID=useRef(0)




// const StartCounter=()=>{
//     if (timerID.current) {
//         clearInterval(timerID.current);
//     }

//     let value=setInterval(() => {
//         setCount(c=>c+1)
//     }, 100);
    
//     console.log('startcounter wala inside',count)
//     timerID.current=value
// }


// console.log('bahar wala:',count)

// const StopCounter=()=>{
//     console.log('timerID:',timerID)
//     clearInterval(timerID.current)
//     console.log('stopcounter wala',count)
// }








//     return(
//         <div>
//             <div>{count}</div>
//             <button onClick={StartCounter}>Start</button>
//             <button onClick={StopCounter}>Stop</button>
//         </div>
//     )
    
// }



console.log('just to avoid meetup of both.')

//* ###################    **  Focussing on an input box  **     ###################


// function Appp() {

//     const inputName=useRef(null);


//     function focusShift() {
//         inputName.current.focus();   
//     }



//     return (
//         <div>
//             <input ref={inputName} type="text" placeholder="Enter your name..." />
//             <input type="password" name="" id="" placeholder="Enter your password..." />
//             <button onClick={focusShift}>Submit</button>
        
//         </div>
//     )
// }


console.log('just to avoid meetup of both.')



//* ###################    **  Scroll to bottom  **     ###################
// in the scroll.jsx



  


  




















export default Appp;
