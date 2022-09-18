const userSlice=require('@reduxjs/toolkit').createSlice
const { createAsyncThunk } = require('@reduxjs/toolkit')
const axios=require('axios')
const initialState={
    loading:false,
    users:[],
    error:''
}
const fetchUsers=createAsyncThunk('.user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(req=>req.data.map(user=>user.id))
})
        
const userSlices=userSlice({
    name:'user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[],
            state.error=action.error.message
        })
    }
    
})
module.exports=userSlices.reducer
module.exports.fetchUsers=fetchUsers