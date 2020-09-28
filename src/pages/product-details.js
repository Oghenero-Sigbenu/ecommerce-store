import React, { Component } from 'react';
import productImg from "../assets/ba6.jpg";
import { connect } from "react-redux";
import { getProductById } from "../actions/products";
import { addToCart, getUserCart, updateCart } from "../actions/cart";
import Spinner from "../components/Common/Spinner";
import Cart from "../components/addCart";
import Button from "../components/Common/Button";
import Modal from "../components/Common/Modal";
import Footer from "../components/Common/Footer";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            isShowing: false,
            products: "",
            disable: true,
            show: true,
            hide: true,
            msg: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.navigate = this.navigate.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        const productId = this.props.match.params.id;
        this.props.getProductById(productId);
        this.props.getUserCart(this.props.user.id)
    }

    handleChange = (e) => {
        this.setState({
            qty: e.target.value,
        })
    }
    addToCart = () => {
        const { user, product, cart } = this.props;
        const { qty } = this.state;
        const quantity = parseInt(qty);
        
        if (!user) {
            this.setState({
                msg: "Login to add to cart"
            })
        } else {
            this.setState({
                isShowing: true
            })
            const result = cart.filter((items) => (
                items.productId === product.id
                ))
             
                if (cart.length !== 0) {
                    if (result.length === 0) {
                    let totPrice = quantity * product.price;
                    this.props.addToCart({ qty: quantity, UserId: user.id, products: product, productId: product.id, isOrdered: 1, totalPrice:totPrice })
                    this.props.getUserCart(this.props.user.id)
                } else {
                    const item = result[0];  
                    const totPrice = quantity * item.products.price
                    this.props.updateCart({ id: item.id, qty: quantity, UserId: user.id, products: item.products, productId: item.productId, isOrdered: 1, totalPrice: totPrice })
                    this.props.getUserCart(this.props.user.id)
                }
            } else {
                const totPrice = quantity * product.price
                this.props.addToCart({ qty: quantity, UserId: user.id, products: product, productId: product.id, isOrdered: 1, totalPrice: totPrice })
                this.props.getUserCart(this.props.user.id)
            }
            return
        }
    }
    navigate(path) {
        this.setState({
            show: false
        });
        setTimeout(() => {
            this.props.history.push(path);
        }, 500);
    };
    openModal = () => {
        this.setState({
            isShowing: true
        })
    };
    closeModal = () => {
        this.setState({
            isShowing: false
        })
    };
    render() {
        const { product, isLoading, user } = this.props;
        const { qty, msg, isShowing,hide } = this.state;
        return (
            <div className="home">
                {/* <div className="bg"></div> */}
                <div className="detail ">
                    <div className="inner-box row">
                        {isLoading ? <Spinner /> :
                            <>
                                <div className="detail-img col-md-4">
                                    <img src={productImg} alt={product.name} />
                                </div>
                                <div className="detail-text col-md-8">
                                    <h2>{product.name}</h2>
                                    <p className="price">₦{product.price}</p>
                                    <hr></hr>
                                    <input className="quantity" type="number" value={qty} name="qty" onChange={this.handleChange} min="0" />
                                    <br></br>
                                    <p>{msg}</p>
                                    <Cart product={product} user={user} qty={qty} onclick={this.addToCart} msg={msg} />
                                    <hr></hr>
                                    <p>{product.description}</p>
                                    <hr></hr>
                                    <p>Category: {product.category}</p>
                                </div>
                            </>}
                    </div>
                </div>
                <Modal show={isShowing} handleClose={this.closeModal} open={this.openModal}>
                    <Button onclick={this.closeModal}>Continue shopping</Button>
                    <Button onclick={() => this.navigate(`/cart/${user.id}`)}>View cart & checkout</Button>
                </Modal>
                <Footer hide={hide}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { product, isLoading, products } = state.product;
    const { token, user } = state.auth;
    const { cart } = state.cart;
    return {
        product, cart,
        isLoading,
        token, user, products
    }
}
export default connect(mapStateToProps, { getProductById, addToCart, getUserCart, updateCart })(Products);