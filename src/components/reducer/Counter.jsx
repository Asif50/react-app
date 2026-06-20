import { useReducer } from "react"
import "./Counter.css"

import counterReducer from './counterReducer.js'


function Counter(){

    let [state,dispatch] = useReducer(counterReducer, {count : 0});

    let incCount = ()=>{  
        dispatch({type : "INC"});
    }

    let decCount = () => {
        dispatch({type : "DEC"});
    }

    let reset = () => {
        dispatch({type : "RESET"});
    }

    return(
        <div className="">
            <h2>Counter App with useReducer() Hook : {state.count}</h2>
            <button onClick={incCount}>incCount</button>
            <button onClick={decCount}>decCount</button>
            <button onClick={reset}>clear</button>
        </div>
    )
}

export default Counter