
import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Common/Spinner";
import { getUserCart, deleteCartItem } from '../actions/cart';
import productImg from "../assets/ba6.jpg";
import Button from "../components/Common/Button";
import Footer from '../components/Common/Footer';

function Cart ({match}) {
    let [subTotal, setTotalItem] = useState("");
    let [hide, setHide] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const UserId = user.id;
    useEffect(() => {
        dispatch(getUserCart(UserId))
    },[]);// eslint-disable-next-line
    
    setTimeout(() => {
        setHide(hide =true);
    }, 500)
    const handleChange = () => {

    }
    const deleteItem = (id) => {
        console.log("not")
        // setTimeout(() => {
            dispatch(deleteCartItem(id))
             dispatch(getUserCart(UserId))

        // }, 100)
    }
    const cart = useSelector(state => state.cart.cart);
    const isLoading = useSelector(state => state.cart.isLoading);
    console.log(cart)
    if(cart){
        if(cart.length !== 0){
        const subTotal  = cart
       .map(item => item.totalPrice)
       .reduce((prev, next) => prev + next);
       setTimeout(() => {
        setTotalItem(subTotal)
         }, 500)
         }
    }else{
        console.log("no item in cart")
    }
        const styles = {
            fontSize: "12px",
            background: "red"
        }
    return(
        <div className="checkout">
            {/* <h4>Products</h4> */}
            {isLoading ?
             <Spinner/> 
            :
            <>
            <div className="container">
            <div className="row pb-5">
            <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5>Customer Details</h5>
                </div>
                <div className="card-body">
                    <h5>{user.fullname}</h5>
                    <p>{user.address}</p>
                    <p>{user.phone}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h6>Select Payment Method</h6>
                </div>
                <div className="card-body">
                   <Button>Pay Now</Button>
                </div>
            </div>
            </div>
            <div className="col-md-4">
                <div className="card checkout-card">
            {cart && cart.map(item => (
                <div className="row " key={item.id}>
                    <div className="col-md-3 checkout-img">
                        <img src={productImg} alt="Cart item"/>
                    </div>
                    <div className="col-md-6">
                    <p>{item.products.name}</p>
                    </div>
                    <div className="col-md-3">
                        <h4>{item.totalPrice}</h4>
                    </div>
                </div>
            ))} 
            <div className="row align-left" >
                    <div className="col-md-6 float">
                    <h6>Sub-total: ₦{subTotal}</h6>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </>    
            }
            <Footer hide={hide}/>
        </div>
    )
}

export default Cart;