import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../card/Card";
import { useState } from "react";
import axios from "axios";

function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


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
        <div>
             <button onClick={getProducts}>Get Products</button>
            <Slider {...settings}>
                {

                    allProducts.map((product) => {
                        return (
                            <Card
                                // key={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                            />
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default SimpleSlider;