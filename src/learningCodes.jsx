
import { useState,useEffect } from "react";




// function ParentPaglu({children, style}) {

//     return(
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//             ...style,
           
//         }}>
//             {children}
           

//         </div>
//     )
    
// }


// function Appp() {

//     return(
//         <div >

//             <ParentPaglu style={{backgroundColor:'red'}} >
//                 <h1>BOX-1</h1>
//             </ParentPaglu>

//             <ParentPaglu >
//                <div ><h1>BOX-2</h1></div> 
//             </ParentPaglu>



            

//         </div>
//     )
    
// }








// //**********************    Collapsible Section    ****************************/

function Collapse({ title,children}) {

    const [collapsible, setCollapsible]=useState(false)

    return(

        <div>

            <button onClick={()=>setCollapsible(!collapsible)}>
                {title} {collapsible? '-':'+'}
            </button>

                {collapsible && <div>{children}</div>}
            
        </div>
    )
    
}



function Appp() {

    return(

        <div>

            <Collapse title='button-1'>
                <p>This is the result after clicking button-1</p>
            </Collapse>

            <Collapse title='button-2'>
                <p>This is the result after clicking button-2</p>
            </Collapse>


        </div>
    )
    
}





export default Appp;