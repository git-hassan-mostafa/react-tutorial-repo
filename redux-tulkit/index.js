
const { dispatch } = require('./app/store')
const store=require('./app/store')
const cakeAction=require('./features/cake/cakeSlice').cakeActions
const iceCreamAction=require('./features/ice cream/iceCreamSlice').iceCreamActions
const fetchUser=require('./features/users/userSlice').fetchUsers
console.log('inital state',store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log('updated state',store.getState())
})
store.dispatch(fetchUser())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))


// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.restocked(3))
// unsubscrib+e()