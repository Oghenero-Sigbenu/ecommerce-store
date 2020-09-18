import React from "react";
import product from "../assets/ba6.jpg";
import "./Common/css/productCards.css";
import Button from "../components/Common/Button";
import {NavLink} from "react-router-dom";

function ProductCard ({products}) {
    return(
        <div className="">
             <div className="flex1">
            {products && products.map(item => (
            <div className="product-card" key={item.id}>
                <div className="inner-box p-box">
                <div className="product">
                <img src={product} alt="product" />
                </div>
                <div className="product-text">
                <NavLink to={`detail/` + item.id}>
                <h6>{item.name}</h6>
                <p className="price">₦{item.price}</p>
                </NavLink>
                </div>
                <Button>Add to cart</Button>
                </div>
                </div>
            ))}
                
        </div>
        </div>
    )
}

export default ProductCard;