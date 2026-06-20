import { useRef } from "react"
import { useDispatch } from "react-redux";
// import actionObj from "./action";

function Name(){

    let inputRef = useRef(null);
    let emailRef = useRef(null);
    let dispatch = useDispatch(); // when dispatch() is called it return dispatch hook

    const getData = () => {
        // create a action object

        var actionObj = {
            type : "NAME",
            nameComp: inputRef.current.value,
            emailCom : emailRef.current.value
        };
        // console.log(actionObj);
        dispatch(actionObj);
    }

    return(
        <div style={{padding:"50px"}}>
            <h2>Name Component</h2>
            <input ref={inputRef} type="text" placeholder="Add Some Data" />
            <br /><br />
            <input ref={emailRef} type="text" />
            <button onClick={getData}>Submit</button>
        </div>
    )
}

export default Name