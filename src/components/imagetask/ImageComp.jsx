import { useState } from "react";
import "./ImageComp.css"


function ImageComp(){

  let [title, setTitle] = useState("React");

  let [url, setUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg");

  const changeToAng = () => {
    setUrl("https://miro.medium.com/v2/1*FKD2Uy_Q6r6AviZA2VD4RQ.png");
    setTitle("Angular");
  };  

  const changeToReact = () => {
    setUrl("https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg");
    setTitle("React");
  };

    return(
      <div id="ImageComp">
        <h2 style={{color:"green"}}>{title}</h2>
        <img src={url} width="300" height="300" />
        <br />
        <br />
        <button onClick={changeToReact}>React</button>
        <button onClick={changeToAng}>Angular</button>
      </div>  
    );
}

export default ImageComp;