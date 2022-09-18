const cakeSlice=require('@reduxjs/toolkit').createSlice
const initialState={
    nbOfCakes:10
}
const cakeSlices=cakeSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.nbOfCakes --;
        },
        restocked:(state,action)=>{
           state.nbOfCakes+=action.payload
        }
    }
})
module.exports=cakeSlices.reducer;
module.exports.cakeActions=cakeSlices.actions