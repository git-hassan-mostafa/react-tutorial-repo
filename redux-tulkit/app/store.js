const { configureStore} = require('@reduxjs/toolkit')
const reduxLogger=require('redux-logger')
const cakeReducer=require('../features/cake/cakeSlice')
const iceCreamReducer=require('../features/ice cream/iceCreamSlice')
const fetchUsers=require('../features/users/userSlice')
const logger=reduxLogger.createLogger()
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        users:fetchUsers
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
module.exports=store