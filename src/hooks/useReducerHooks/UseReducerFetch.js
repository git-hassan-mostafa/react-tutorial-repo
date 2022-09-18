import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
const initialState={
    loading : true,
    post : {},
    error :''
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'success':
            return {
                loading:false,
                post: action.posts,
                error:''
            }
        case 'failed':
            return {
                loading:false,
                post:{},
                error:'something went wrong'
            }
    }
}
function UseReducerFetch() {
    const [fetching,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'success',posts:res.data})
        })
        .catch(error=>{
            dispatch({type:'error'})
            
        })
    },[])
  return (
    <div>
        {fetching.loading ? 'loading' : fetching.post.title}
        {fetching.error ? fetching.error : null}
    </div>
  )
}

export default UseReducerFetch

