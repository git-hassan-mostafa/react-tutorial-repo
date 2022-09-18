const redux=require('redux')
const axios=require('axios')
const createStore=redux.legacy_createStore
const applyMiddleWare=redux.applyMiddleware
const thunkMiddleWare=require('redux-thunk').default

const initialState = {
    loading: false,
    users: [],
    error: ''
}
const FETCH_REQUESTED = 'FETCH_REQUESTED'
const FETCH_SUCCEDED = 'FETCH_SECCEDED'
const FETCH_FAILURE = 'FETCH_FAILURE'

const fetchUsersRequest = (users) => {
    return {
        type: FETCH_REQUESTED,
        payload:users
    }
}
const fetchUsersSucceded = (users) => {
    return {
        type: FETCH_SUCCEDED,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SUCCEDED:
            return {
                ...state,
                loading: true,
                users: action.payload,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: true,
                users:[],
                error:action.payload
            }
            default :return state
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((req)=>{
            const user=req.data.map((user)=>user.name)
            dispatch(fetchUsersSucceded(user))
        })
        .catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleWare(thunkMiddleWare))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUsers())