import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    nbOfCakes: 10
}
const cakeSlices = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.nbOfCakes--



        },
        restocked: (state, action) => {
            state.nbOfCakes += action.payload


        }
    }
})
export default cakeSlices.reducer
export const { ordered, restocked } = cakeSlices.actions