import React, { useState } from "react"
import './Ref.css'

function Ref(){

    let [state, setState] = useState("");

    let [data, setData] = useState();

    let value;

    function updateState(){
        setState(100);
    }

    let displayValue = ()=>{
        
        console.log("state : ", state);

        console.log("Data : ", data);

        console.log("variable : ",value);
    }

    let updateValue = ()=> {
        value = "Value Got Updated";
    }

    let updateData = () => {
        setData(1000);
    }

    return(
        <div className="refContainer">
            <h2>Ref Component : {state}</h2>
            <button onClick={updateState}>Update State</button>
            
            <button onClick={updateValue}>Update Value</button>

            <button onClick={updateData}>Update Data</button>
            
            <button onClick={displayValue}>Display</button>
        </div>
    )
}

export default Ref