import { useMemo, useState } from "react"

function Memo(){

    let [state, setState] = useState(0);

    let increase = () => {
        setState(state+1);
    }

    function myCalculation(value){
        for(let i = 0; i <= 99; i++){
            value = value + 1;
            console.log("this function runs");
            // state = state + 5;
        }
        return value;
        // return state
    }

    //  let ans1 = myCalculation(10);
    
    // let ans = useMemo(()=>myCalculation(5),[])
    
    return(
        <div>

            {/* <div><h2>Function calculated Value = {ans1}</h2></div> */}

            <div><h1>Value = {state}</h1></div>

            <button onClick={increase}> Click </button>

        </div>
    )
}

export default Memo