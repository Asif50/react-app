import React from "react"
import C from "./C"

const bStyle = {
    width:"300px",
    boxShadow:"0 0 10px red",
    textAlign:"center",
    padding:"30px",
    margin:"20px auto"
}
function B(Props){
    return(
        <div style={bStyle}>
            <h2>B Component</h2>
            {/* <p >Data : {Props.info} </p> */}
            <C data={Props.info}/>
        </div>
    )
}

export default B