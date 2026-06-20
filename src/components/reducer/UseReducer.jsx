import { useReducer } from "react"

const reducerFn = (action)=>{
    // here we write logic to manipulate state
    return "Oxford"; 
}

function UseReduser(){

    let[state,dispatch] = useReducer(reducerFn, 100);

    let modifyState = ()=>{
        dispatch();
    };

    return(
        <div style={{padding: "100px"}}>
            <h2>UseReduser() Hook : {state}</h2>
            <button onClick={modifyState}>click</button>
        </div>
    )
}

export default UseReduser