import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"

function Nav(){
    return(
        <div className="nav">
            <div className="leftPanel flexContainer">
                <h1>React Routing</h1>
            </div>
            <div className="rightPanel flexContainer">
                <Link to="/">Home</Link>
                <Link to="/allproducts">AllProducts</Link>
                <Link to="/products">Products</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/imagecomp">ImageComp</Link>
                <Link to="/jsonserver">Json-Server</Link>
                <Link to="/github">GitHub</Link>
                <Link to="electronics"></Link>
               
            </div>
        </div>
    )
}

export default Nav