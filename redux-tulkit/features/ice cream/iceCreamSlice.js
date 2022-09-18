const iceCreamSlice=require('@reduxjs/toolkit').createSlice
const {cakeActions}=require('../cake/cakeSlice')
const initialState={
    nbOfIceCream:20
}
const iceCreamSlices=iceCreamSlice({
    name:'ice cream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.nbOfIceCream --;
        },
        restocked:(state,action)=>{
           state.nbOfIceCream+=action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.nbOfIceCream--
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,state=>{state.nbOfIceCream--})
    }
})
module.exports=iceCreamSlices.reducer;
module.exports.iceCreamActions=iceCreamSlices.actions