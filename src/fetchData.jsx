import { useState, useEffect } from "react";


function FetchingData() {

    const [tab, setTab]=useState(1)
    const [tabdata,setTabdata]=useState({})
    const [loading,setLoading]=useState(true)

//$$$$$$$$$ here useEffect will fetch the data from api only when mounting therefore [] dependency.

    useEffect( ()=>{
        setLoading(true)

        //fetching data...from api
        //here we know why await becz async it returns promise therefore tab tak loading is true...
        //converting response in json formate
        //in fetch link + tab is becz in this api we accessing todos with its number and we are giving no. using out tab no.

        fetch("https://jsonplaceholder.typicode.com/todos/"+tab)
        .then(async res=>{
            const JSONResponse=await res.json()
            setTabdata(JSONResponse)
            setLoading(false)
        })

    },[tab])






    return(
        <div>
            <div style={{display:'flex', justifyContent:"space-around"}}>

                <button onClick={()=>{setTab(1)}}  style={{color: tab==1? 'red':'black'}}>todo#1</button>
                <button  onClick={()=>{setTab(2)}}  style={{color: tab==2? 'red':'black'}}>todo#2</button>
                <button  onClick={()=>{setTab(3)}}  style={{color: tab==3? 'red':'black'}}>todo#3</button>
                <button  onClick={()=>{setTab(4)}}  style={{color: tab==4? 'red':'black'}}>todo#4</button>
            </div>

            <div>{loading ? 'loading...':tabdata.title}</div>

            

        </div>
    )
    
}




export default FetchingData;