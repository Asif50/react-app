import { useRef } from "react";
function RefDom() {

    let h2Ref = useRef(null);   // h2Ref = {current:null}
    let buttonRef = useRef(null);

    let changeContentStyle = () => {
        h2Ref.current.innerText = "DOM Manipulated using Ref Concept";
        h2Ref.current.style.color = "red";

        buttonRef.current.style.color = "green";
        buttonRef.current.style.padding = "10px";
        // buttonRef.current.classList.add();
    };
    return (
        <div style={{ padding: "50px" }}>                  
            <h2 id="title" ref={h2Ref}>DOM Manipulation using useRef() hook</h2>
            <button ref={buttonRef} onClick={changeContentStyle}>Change Content and Style</button>
        </div>
    ) 
}
export default RefDom