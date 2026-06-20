import { useState } from "react";

function Dispaly({setData}){

    let [childData, setChildData] = useState("NodeJS");

    return(
        <div>
            <h2>Display Component</h2>
            <h3>Child</h3>
            <br />
            <button onClick={()=>{
                // setData(childData);
                setChildData(setData);
            }}>Data to parent</button>
        </div>
    )
}

export default Dispaly;