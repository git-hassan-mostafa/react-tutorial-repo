const redux = require('redux')
const bindActionCreators = redux.bindActionCreators

const createStore = redux.legacy_createStore
const initialState = {
    name:'hassan',
    address:{
        city:'tripoli',
        street:'main street'
    }
}
const UpdateAdrress = (updated) => {
    return {
        type: 'updateStreet',
        payload: updated
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateStreet': return {
            ...state,
            address:{
                ...state.address,
                street:action.payload
            }
            
        }
        default: return state
    }
}
const store = createStore(reducer)
console.log('initial state ', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

// store.dispatch(BuyCakes())
// store.dispatch(BuyCakes())
// store.dispatch(BuyCakes())
// store.dispatch(BuyCakes())
// store.dispatch(restokeCakes(3))

// unsubscribe()

// and alternative way to write the code above 
const actions = bindActionCreators({
    UpdateAdrress
}, store.dispatch)
actions.UpdateAdrress('second street')
unsubscribe()



