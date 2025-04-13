
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

export const useFetch=(url , retryTimeout)=>{

    const [posts, setPosts]=useState({})
    const [loading, setLoading]=useState(true)
    const [error, setError ]=useState(null)

    async function getfetchdata() {

        try {
            
            setLoading(true)
            const res=await fetch(url)
            const resJson=await res.json()
            setPosts(resJson)
                 
        }catch (err) {
                console.log('Error in fetching saar ! ',err)
                setError(err)

        }finally{
            setLoading(false)
        } 
    }


    useEffect( ()=>{
        getfetchdata()
        //do fetch whenever url changes...
    }, [url])



// this useEffect is for retrying fetching after every retrytimeout  it has no need to care about url changes
    useEffect( ()=>{
        
        let intervalID=setInterval(() => {
            getfetchdata()

        }, retryTimeout * 10000);

        return ()=>{
            clearInterval(intervalID)
        }


    })

    return{    
         posts,
         loading
        }
}