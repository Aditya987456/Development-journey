import React, { useState, useEffect } from 'react';
import Counter from './counterApp.jsx'
import FetchingData from './fetchData.jsx';


//######  (W-9.4 ) Assignment #1 - Create a LinkedIn notification component that increases by 1 every 5 seconds.	

// function App() {
//   const [count,setcount]=useState(0)

//   // function notificationCounter() {
//   //   setcount(count+1)
//   // }


//   useEffect(()=>{
//     console.log('on mounting')
//     setInterval(() => {
//       console.log('inside setinterval')
//       setcount(count=>count+1)
//     }, 5000);
//   },[])



//   return (
//     <div>

     

//         <div style={{position:'relative'}} >
//           <div  style={{
//             overflow: 'hidden',
//             width: '20px',
//             height: '20px',
//             marginTop:'20px',
            
//             backgroundColor: 'red',
//             borderRadius: '50%',
//             position: 'absolute',
//             top: '-5px', // Adjust vertical position
//             right: '15px', // Adjust horizontal position
//             textAlign: 'center',
//             justifyContent: 'center',
//             alignItems: 'center',
//             display: 'flex',
//             textOverflow: 'ellipsis',
//             whiteSpace: 'nowrap',
//             fontSize: '12px', // Ensure text fits
//             color: 'white', // Make text visible
//             fontWeight: 'bold', // Better readability
//           }}>
//           {count>99?'99+':count}
//           </div>
        
//           <img style={{marginLeft:50, width:40, marginTop:20, borderRadius:50}} src={"https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg" } alt="" />
        
//         <div style={{marginLeft:30}}><p>Notification</p></div>
        
//         </div>
    
//     </div>
//   );
// }











//  // ####### (W-9.3) Assignment #1 - Create linkedin ProfileCard Component Just after the Post Component

// function App() {

//   //array of objects
//   const [posts, setPosts]=useState([])



//   const postComponents=posts.map(post=> <Userpost

//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.time}
//       image={post.image}
//       description={post.description}

//   />)



//   function Addpost(){
//     setPosts([...posts,{
//       name:'Aditya raj',
//       subtitle:"Btech Cse'26 | mern dev | dsa c++",
//       image:'href',
//       time:'2m ago',
//       description:<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit nam distinctio non repellat omnis aut eum perspiciatis fugiat, velit dolore eaque a, modi assumenda fugit quod nobis corporis quae, culpa ducimus quos nihil sequi! Vitae, quam, odit accusamus eius nihil porro ea voluptas voluptatum error inventore natus est in laudantium nemo necessitatibus assumenda officiis, beatae quos deleniti. In unde cumque iste culpa, odio voluptatibus. Architecto incidunt, exercitationem veritatis at harum nam quo non dolore minima rerum animi saepe nobis corrupti optio dolor nihil ex deleniti amet libero nisi. Excepturi consequuntur optio hic perferendis culpa assumenda, qui totam possimus autem!</>
//     }])
//   }


//   //profile card that will fixed...

//   function Profile() {

//     return(
//       <div style={{marginTop:30, width:250, height:280, backgroundColor:'#F0FFF0',marginLeft:60, borderRadius:8, ...divStyles}}>
  
//         <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
//           <img src="https://th.bing.com/th/id/OIP.OClH_cVh5VEYtfoAz_0y8wHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ height:60,width:60, borderRadius:50, backgroundColor:'white',borderColor:'black',borderWidth:2 }} />        
//         </div>

//         <div style={{ marginTop:20,display:'flex', justifyContent:'center', fontSize:22}}>
//           <b>Aditya raj</b>
//         </div>

//         <div style={{ marginTop:7,display:'flex', justifyContent:'center', fontSize:14}}>
//           B.tech cse'26 | mern dev
//         </div>

//         <br/>
//         <hr/>

      

//         <div style={{marginTop:30}}>
//           <span style={{fontFamily:'monospace', margin:10}}>Profile viewers:</span>
//            <span style={{marginLeft:50, color:'blue', fontSize:14}}><b>123</b></span>
//         </div>
//         <div style={{marginTop:10}}>
//           <span style={{fontFamily:'monospace', margin:10}}>Post impressions:</span>
//           <span style={{marginLeft:50, color:'blue', fontSize:14}}><b>1563</b></span>           
//         </div>
        
  
//       </div>
//     )
    
//   }


//   //post button with profile.
//   // const divsty={boxShadow:"0 1px 1px rgba(230, 29, 29, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12)"}

// function Adddpost(){
//   return (
//     <div >
     

//       <div style={{height:140, width:615, marginLeft:120, backgroundColor:'#F0FFF0', marginTop:30,borderRadius:15,...divStyles }}>
//         <div style={{display:'flex'}}>
//           <img src="https://th.bing.com/th/id/OIP.OClH_cVh5VEYtfoAz_0y8wHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ marginLeft:15,marginTop:20,height:60,width:60, borderRadius:50, backgroundColor:'white',borderColor:'black',borderWidth:2 }}/>
          
//           <button onClick={Addpost} style={{borderRadius:30, width:500, cursor:'pointer', marginLeft:20, marginTop:20, fontSize:18}} >Click! for new <b>Post</b></button>

//         </div>

//         <div style={{marginLeft:20,display:'flex', justifyContent:'space-around',padding:20, height:25, width:30}}>
//           <img src="https://cdn1.iconfinder.com/data/icons/camera-and-photography-3/64/Gallery-256.png"  style={{marginLeft:30}} /><span style={{padding:5}}>Image</span>
//           <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699342-icon-69-document-text-512.png" style={{marginLeft:105}} /><span style={{padding:5}}>Document</span>
//           <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698662-icon-56-document-text-128.png" style={{marginLeft:125}} /><span style={{padding:5}}>Article</span>

//         </div>

//       </div>


      
//     </div>
//   )
// }



// return (
//   <div>

//       <div style={{display:'flex'}}>
//         <Profile/>
//         <Adddpost/>
//       </div>

      

//       <div
//           style={{          
//             display: 'flex', // Enables flexbox
//             justifyContent: 'center', // Centers horizontally,
//             marginTop:-115
          
//           }}>
//               <div>
//               {postComponents }
//               </div>

//       </div>






//   </div>
//   );
// }



// const divStyles = {
//   boxShadow:" rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
   
// }


// const style={
  
//   backgroundColor:'#FFF5EE',
//     width:600, 
//     borderRadius:10,
//     borderWidth:2, 
//     padding:10,
//     marginLeft:15,
//     marginTop:45,
//     ...divStyles
//   }

// //individual post ka componenet  kaisa dikhega wo...
// function Userpost({name,subtitle,image,time,description}) {

//   return(
    
//     <div style={style}>
//       <div style={{display:'flex'}}>

//           <img src="https://th.bing.com/th/id/OIP.OClH_cVh5VEYtfoAz_0y8wHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ height:60,width:60, borderRadius:50, backgroundColor:'white',borderColor:'black',borderWidth:2 }} />
          
//           <div style={{fontSize:12, marginLeft:15}} >
//             <b style={{fontSize:17}}>{name}</b>
          
//             <div>{subtitle}</div>

//             <div style={{display:'flex'}}>
//               <div>{time}</div>
//               <img src="https://www.emoji.co.uk/files/twitter-emojis/symbols-twitter/11282-clock-face-two-oclock.png" style={{height:14,width:15, marginLeft:5, marginTop:1}} />
//             </div>
//           </div>
//       </div>

//       <br/>

//       <div>{description}</div>


//     </div>
//   )
 
// }












// //****************######  (W-9.2) Assignment #1 - Counter Application   ######***********************


// function App() {

//   return(
//     <div>
      
//       <Counter/>

//     </div>

//   );
// }






// //****************######  (W-9.2) Assignment #2 Fetching User Data ######***********************


// function App() {

//     return(
//       <div>
//             <FetchingData/>
//       </div>
  
//     );
//   }


import Appp from './learningCodes.jsx';

function App() {

    return(
        <div>
            <Appp/>

        </div> 
    )
    
}
















export default App;
