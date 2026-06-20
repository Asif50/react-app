import "./Products.css";
import {Link, Outlet} from 'react-router-dom'

function Products(){
    return(
        <div>
            <h2 style={{textAlign: "center", marginTop:"20px", color:"green"}}>Product Component</h2>
            <div className="productsContainer">
                <div className="linksContainer">
                    <Link to="electronics" style={{textDecoration:"none", color: "white", fontSize: "22px"}}>Electronics</Link>
                    <Link to="jewelry" style={{textDecoration:"none", color: "white", fontSize: "22px"}}>Jewelry</Link>
                    <Link to="mens" style={{textDecoration:"none", color: "white", fontSize: "22px"}}>Men'sClothing</Link>
                    <Link to="womens" style={{textDecoration:"none", color: "white", fontSize: "22px"}}>Women'sClothing</Link>
                </div> 
                <div className="componentContainer" >
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Products