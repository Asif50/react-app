import React, { useContext } from "react"
import { MyHomeContext } from "./MyHomeContext"

function Details(){
    let info = useContext(MyHomeContext)
    return(
        <div>
            <h2>Details Component</h2>
            <h4>Data : {info}</h4>
        </div>
    )
}

export default Details