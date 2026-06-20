import "./AllProducts.css"
import axios from 'axios'
import Card from './card/Card';
import { useState } from 'react';
import SimpleSlider from "./simpleslider/SimpleSlider";

function AllProducts() {

    let [allProducts, setAllProducts] = useState([]);

    const getProducts = (image, title, price) => {
        var promiseObject = axios.get("https://fakestoreapi.com/products");
 
        promiseObject.then((res) => {
            console.log("Successful : Data Fetched");
            console.log(res.data);
            setAllProducts(res.data);
        }).catch((error) => {
            console.log("ERROR : Data not Found");
            console.log(error);
        });
    };

    

    return (
        <div style={{ padding: "50px" }}>
            <h2 style={{ marginBottom: "20px" }}>All Products</h2>
            <p style={{ marginBottom: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam provident ratione velit quos minus optio consectetur nemo? Doloribus illum eum quam recusandae aut architecto iure fugiat nihil cum, temporibus ipsa error eos. Nemo exercitationem minus consectetur, molestias unde asperiores et, quia natus iusto, beatae facere? Est quos quia atque?</p>
            <h1>As Nothing <br />There is no self</h1>
            <button onClick={getProducts}>Get Products</button>

              

            <div className="allProductsData">
                {
                    // when certain UI need to be created based on the data then go for map function
                    
                  
                    allProducts.map((product) => {
                        return (
                            <Card 
                                // key={product.id}
                                image={product.image}
                                title={product.title} 
                                price={product.price}
                            />
                           
                            
                                // <tr style={{boxShadow: "0 0  15px black", border: "1px"}}>
                                //     <td><img src={product.image} alt="" height={200} width={200}/></td>
                                //     <td>{product.title} </td>
                                //     <td>{product.price}</td>
                                    
                                // </tr>
                                
                         
                        )
                    })
                }
            </div>
        </div>
    );
}


export default AllProducts