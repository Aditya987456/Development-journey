//----------------------------------       WEEK-10-react        -------------------------------------

import { BrowserRouter, Route, Routes, Link  } from "react-router-dom";


const Appp=()=>{


    return(
        <div>
            <BrowserRouter>


                <Link to="/jee/admission"><button >JEE Admission</button></Link>
                <br />
                <br />
                <Link to="/neet/admission"><button >NEET Admission</button></Link>


                   





                <Routes>

                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/jee" element={<Jee/>}/>
                    <Route path="/neet" element={<Neet/>}/>
                    <Route path="/neet/admission" element={<Admission batch='neet' />}/>
                    <Route path="/jee/admission" element={<Admission batch='jee' />}/>

                </Routes>
            </BrowserRouter>


        </div>
    )
}



const LandingPage=()=>{
    
    return(
        <div>
            <h1>welcome to landing page Sir...</h1>
        </div>
    )

}


const Jee=()=>{
    
    return(
        <div>
            <h1>welcome to JEE prep page Sir...</h1>
        </div>
    )

}


const Neet=()=>{
    
    return(
        <div>
            <h1>welcome to NEET prep page Sir...</h1>
        </div>
    )

}



function Admission(props) {
    return(
        <div style={{height:400,
            width:400,
            borderRadius:10,
            backgroundColor:'cornflowerblue',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:20,
            flexDirection:"column",
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>

                <div><h1>Admission open</h1></div>
                <div><h3>{props.batch} batch-2025</h3></div>
               
            
        </div>
    )
    
}




















export default Appp;
