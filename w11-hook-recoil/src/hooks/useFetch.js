
import { useState, useEffect } from "react";







//----------  ######    fetching normally.----------------
// export const usefetchPost=()=>{

//     const [post, setPost]=useState({})

//     async function getpost() {

//         const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const jsonDATA=await response.json()
//         setPost(jsonDATA)
//     }

//     useEffect( ()=>{
//         //it only call on mounting...
//         getpost()

//     }, [])
    


//     return post.title;

// }




console.log('\n')

//-----------------#########     fetching using url......................

export const useFetch=(url)=>{

    const [posts, setPosts]=useState({})
    const [loading, setLoading]=useState(true)

    async function getfetchdata() {
        setLoading(true)
        const res=await fetch(url)
        const resJson=await res.json()
        setPosts(resJson)
        setLoading(false)
    }


    useEffect( ()=>{
        getfetchdata()
        //do fetch whenever url changes...
    }, [url])

    return{    
         posts,
         loading
        }
}