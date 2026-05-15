import { useState } from "react";
import Details from "./Details"
import { MyHomeContext } from "./MyHomeContext"


function HomeContext() {

    let [state, setState] = useState("");
    let [data, setData] = useState("");

    function submitData(){
        setData(state);
    }

    return (
        <div style={{ padding: "50px" }}>
            <h2>Home Component</h2>
            <input type="text" placeholder="Enter Text" onChange={(event)=>{
                setState(event.target.value);
            }} />
            <button onClick={submitData}>Submit</button>
            <hr />

            <MyHomeContext.Provider value={data}>
                <Details />
            </MyHomeContext.Provider>


        </div>
    )
}

export default HomeContext