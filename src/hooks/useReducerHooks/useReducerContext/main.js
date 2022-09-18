import React,{useReducer} from 'react'
import CompA from './compA'
import CompB from './compB'
import CompC from './compC'
export const Context =React.createContext()
function Main() {
    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;

        }
    }

    const [count,setCount]=useReducer(reducer,initialState)
  return (
    <div>
      count :{count}
      <Context.Provider value={{contextCount:count , contextSetCount:setCount}}>
    <CompA />
    <CompB />
    <CompC />
      </Context.Provider>
    </div>
  )
}

export default Main
