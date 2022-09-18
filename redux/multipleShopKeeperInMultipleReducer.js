const redux = require('redux')
const bindActionCreators = redux.bindActionCreators
const combineReducers=redux.combineReducers

const createStore = redux.legacy_createStore
const BuyCake = 'buyCake'
const RestokeCake = 'RestokeCake'
const BuyIceCream='IceCream'
const RestokeIceCream='RestokeIceCream'
const cakeState = {
    nbOfCakes: 10,
}
const iceCreamState={
    nbOfIceCream:20
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
const buyIceCreams = () => {
    return {
        type: BuyIceCream,
        payload: 1
    }
}
const restokeIceCreams = (q = 1) => {
    return {
        type: RestokeIceCream,
        payload: q

    }
}

const cakeReducer = (state = cakeState, action) => {
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
const iceCreamReducer=(state=iceCreamState,action)=>{
    switch(action.type){
        case BuyIceCream: return {
            ...state,
            nbOfIceCream: state.nbOfIceCream - 1
        }
        case RestokeIceCream: return {
            ...state,
            nbOfIceCream: state.nbOfIceCream + action.payload
        }
        default: return state
    }
}
const combined=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(combined)
console.log('initial state ', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})
const actions = bindActionCreators({
    BuyCakes, restokeCakes,buyIceCreams,restokeIceCreams
}, store.dispatch)
actions.BuyCakes()
actions.BuyCakes()
actions.BuyCakes()
actions.restokeCakes(3)
actions.buyIceCreams()
actions.buyIceCreams()
actions.buyIceCreams()
actions.restokeIceCreams(5)
unsubscribe()


