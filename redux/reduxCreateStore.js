const redux = require('redux')
const bindActionCreators = redux.bindActionCreators

const createStore = redux.legacy_createStore
const BuyCake = 'buyCake'
const RestokeCake = 'RestokeCake'
const initialState = {
    nbOfCakes: 10,
}
const BuyCakes = () => {
    return {
        type: BuyCake,
        payload: 1
    }
}
const restokeCakes = (q = 1) => {
    return {
        type: RestokeCake,
        payload: q

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BuyCake: return {
            ...state,
            nbOfCakes: state.nbOfCakes - 1
        }
        case RestokeCake: return {
            ...state,
            nbOfCakes: state.nbOfCakes + action.payload
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
    BuyCakes, restokeCakes
}, store.dispatch)
actions.BuyCakes()
actions.BuyCakes()
actions.BuyCakes()
actions.restokeCakes(3)
unsubscribe()


