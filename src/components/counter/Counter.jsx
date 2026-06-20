
import { useState } from "react";
import "./Counter.css"

function Counter(){

    // var count = 0;
    var [state, setState] = useState(0);

    const increaseCount = () => { 
        // count = count + 1;
        // console.log(count);

        setState(state+1);
    };

    return(
        <div className="counter">
            <h1>Counter App in React</h1>
            <p>Count Value is : {state}</p>
            <button onClick={increaseCount}>incCount</button>
        </div>
    );
}

export default Counter