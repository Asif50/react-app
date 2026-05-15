import { useEffect } from "react";


function Text(){

  //  document.title = "text document"; // sideEffect // this is invalid in React

    useEffect(()=>{
        console.log("useEffect's callback is Called ");
        document.title = "Text Document";
    },[])

    return(
        <div>
            <h2 style={{color:"red"}}>Text Component</h2>
            <p>Lorem ipsum dolor, sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto praesentium quasi molestiae maxime facilis laborum veritatis magnam quo! Hic fugiat praesentium error sed laudantium accusantium debitis eius, itaque iusto officia inventore est laborum quis, atque ipsam quisquam incidunt amet excepturi impedit dolorem enim. Nostrum est consectetur unde neque assumenda.</p>
        </div>
    )
}

export default Text