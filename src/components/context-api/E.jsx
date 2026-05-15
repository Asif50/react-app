import React from "react";
import { useContext } from "react"
import myFirstContext from "./context.js"

function E(){

    let data = useContext(myFirstContext);

    return(
        <div style={{padding:"10px"}}>
            <h1>E Component</h1>
            <br/> 
            <h4 style={{color:"green"}}>Data : {data}</h4>
        </div>
    )
}

export default E