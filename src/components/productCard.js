import React from "react";
import product from "../assets/ba5.jpg";
import "./Common/css/productCards.css";

function ProductCard () {
    return(
        <div className="">
            <div className="card">
                <div className="product">
                <img src={product} alt="product" />
                </div>
                <h4>Mini Parfait</h4>
                </div>
        </div>
    )
}

export default ProductCard;