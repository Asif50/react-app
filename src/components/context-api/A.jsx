import React from "react"
import B from "./B"
import myFirstContext from "./context"

function A(){
    return(
        <div style={{padding:"50px"}}>
            <h1>A Component</h1>
            <button>Submit</button>
            <br/>
            <hr />

            <myFirstContext.Provider value={100}>
                <B/>
            </myFirstContext.Provider>
        </div>
    )
}

export default A

