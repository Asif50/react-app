import { useState } from "react"
import Dispaly from "./Display"

function Name(){

    let [state, setState] = useState("");

    return(
        <div>
            <h2>Name Component</h2>
            <h3>Parent</h3>
            <br />
            <p>Child Data : {state}</p>
            <br /><br />
            <Dispaly setData={setState} />
        </div>
    )
}

export default Name