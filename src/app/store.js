 import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
 import {createLogger} from'redux-logger'
 import cakeReducer from '../features/cake/cakeSlice'
 import iceCreamReducer from '../features/ice cream/iceCreamSlice'
 import userReducer  from '../features/users/userSlice'

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        users:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export default store