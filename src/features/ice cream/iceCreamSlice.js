
import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrder} from '../cake/cakeSlice'
const initialState={
    nbOfIceCream:20
}
const iceCreamSlices=createSlice({
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
        builder.addCase((cakeOrder),state=>{
            if(cakeOrder) state.nbOfIceCream--
            
        })
    }
})
export default iceCreamSlices.reducer;
export const {ordered,restocked} =iceCreamSlices.actions