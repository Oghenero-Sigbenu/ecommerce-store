
import React, { Component } from 'react';
import Spinner from "../components/Common/Spinner";
import { getUserCart, deleteCartItem } from '../actions/cart';
import productImg from "../assets/ba6.jpg";
import Button from "../components/Common/Button";
import Footer from '../components/Common/Footer';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
// import { faTrash } from '@fortawesome/free-brands-svg-icons';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: [{name:""}],
            subTotal: "",
            show: true,
            hide: true,
            msg: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    UserId = this.props.match.params.id;
    componentDidMount() {
        this.props.getUserCart(this.UserId)
        this.setState({
            subTotal: this.props.cart
        })
        console.log(this.props.cart)
    }

    // cart = useSelector(state => state.cart.cart);
    // const user = useSelector(state => state.auth.user);
    // isLoading = useSelector(state => state.cart.isLoading);

    // setTimeout(() => {
    //   setHide(hide =true);
    // }, 500);

    handleChange = (e,index) => {
        const { name, value } = e.target;
        const list = [...this.state.qty];
        list[index][name] = value;
        this.setState({ qty:list })

    }
    valueChange = (item) => {
        // this.setState({qty : e.target.value})

        console.log(item)
        //    console.log(item )
    }
    deleteItem = (id) => {
        console.log("not")
        // setTimeout(() => {
        this.props.deleteCartItem(id)
        this.props.getUserCart(this.UserId)
        // }, 100)
    }
    if(cart) {
        if (cart.length !== 0) {
            const subTotal = cart
                .map(item => item.totalPrice)
                .reduce((prev, next) => prev + next);
            setTimeout(() => {
                this.setState({
                   subTotal: subTotal
                })
            }, 500)
        }
    }
render() {
    const {subTotal,qty,hide} =  this.state;
    const {isLoading, cart, } =  this.props;
    return (
        <div className="checkout">
            {/* <h4>Products</h4> */}
            {isLoading ?
                <Spinner />
                :
                <>
                    <div className="container cart mt-3">
                        <div className="row  pt-3 cart-width">
                            <span>MY CART ({cart.length} ITEMS)</span>
                        </div>
                        <div className="row cart-width ">
                            <div className="col-md-3 col-sm-3 header">
                                <h6>Item</h6>
                            </div>
                            <div className="col-md-6 col-sm-6 header" >
                                <div className="flex3">
                                    <h6>Details</h6>
                                    <h6>Unit Price</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 header">
                                <h6 className="float">Sub-total</h6>
                            </div>
                        </div>
                        {cart && cart.map((item, i) => (
                            <div className="row cart-box" key={item.id}>
                                <div className="col-md-3 col-sm-3 cart-img">
                                    <img src={productImg} alt="Cart item" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="flex3">
                                        <h6>{item.products.name}</h6> <span>{item.products.price}</span>
                                    </div>
                                    <input className="quantity qty" type="number" name="qty" value={item.qty} onBlur={() => this.valueChange(item)} onChange={e => this.handleChange(e,i)} min="1" />
                                    <span className="delete pt-3" onClick={() => this.deleteItem(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} /> Remove
                    </span>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <span className="float cart-price">{item.totalPrice}</span>
                                </div>
                            </div>
                        ))}
                        <div className="row cart-width" >
                            <div className="col-md-12">
                                <span className="float">Sub-total: ₦{subTotal}</span>
                            </div>
                            <div className="col-md-12">
                                <hr></hr>
                            </div>
                            <div className="col-md-12">
                                <h5 className="float">Total: ₦{subTotal}</h5>
                            </div>
                            <div className="col-md-12">
                                <NavLink to="/checkout" className="float"><Button>Checkout</Button></NavLink>
                            </div>
                        </div>
                    </div>
                </>
            }
            <Footer hide={hide} />
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const { token, user } = state.auth;
    const { cart, isLoading } = state.cart;
    return {
        cart,
        isLoading,
        token, user
    }
}
export default connect(mapStateToProps, { getUserCart, deleteCartItem })(Cart);