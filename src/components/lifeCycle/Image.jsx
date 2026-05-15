import { useEffect, useState } from "react"


function Image(props){

    document.title = "Image Component";

    const [image, setImage] = useState("https://miro.medium.com/v2/1*FKD2Uy_Q6r6AviZA2VD4RQ.png");
    const [name, setName] = useState("React JS");

     useEffect(()=>{
        console.log("UseEffect is called");
        document.title = "Image Component";
     },[image]);

     // useEffect having one callback and an array
     // once component is mount then callback function is called

     // whenever component enter update phase the callback function will recall if we are not passing 2nd argument

     // if we pass 2nd argument it will called only in mount phase

     // first return executed then component will unmount


    return(
        <div>
            {
                console.log("JSX Console")
            }
            <h2 style={{color:"blue", paddingLeft : "100px"}}> {name} Image Component</h2>
            <img src={image} alt="" width="300" height="300"/>
            <br/>
            <button onClick={()=>{setImage("https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg")}}>Change Image</button>
            {/* <button onClick={()=>{setImage("https://tse1.mm.bing.net/th/id/OIP.XL2K7I3OhT_nZgFMURQdSAHaHa?pid=Api&P=0&h=180")}}>nextJS</button> */}
            <button onClick={()=>{setName("Angular")}}>change Title</button>
        </div>
    )
}

export default Image