import React, { useState, useEffect } from 'react'
import axios from 'axios'
function FetchData() {
    // const [posts, setPosts] = useState([])
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idButton,setIdButton]=useState(1)

    const setidFromButton=()=>{
        setIdButton(id)
    }
    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(req => {
        //         setPosts(req.data)
        //         console.log(req)
        //     })
        //     .then(error => console.log(error)) //without dependency
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then(req => {
                    setPost(req.data)
                    console.log(req)
                })
                .then(error => console.log(error)) //with id dependency
    },[idButton])

    return (
        <div>
            <input type={'text'} value={id} onChange={(e)=>setId(e.target.value)} />
            <button onClick={setidFromButton}>add </button>
            <div> {post.title} </div>
            {/* <ul>
               {
                posts.map(post=><li key={post.id}>{post.id} : {post.title} </li>)
            } 
            </ul> */}
            
        </div>
    )
}

export default FetchData
