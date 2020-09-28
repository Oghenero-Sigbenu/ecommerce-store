import React from "react";


function Cart ({msg,onclick}) {
  
   
    return(
        <div className="">
        <p>{msg}</p>
        <button className="new" onClick={onclick} >ADD TO CART</button>
        </div>
    )
}

export default Cart;