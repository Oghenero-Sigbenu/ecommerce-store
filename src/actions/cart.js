import {ADD_TO_CART,UNKNOWN_CART,FAILED, REMOVE_ITEM_FROM_CART, GET_ALL_CART_ITEMS, GET_USER_CART_ITEM, GET_CART_ITEM_BY_ID} from "./types";
import axios from "../util/axios.base";

//add to cart
export const addToCartSuccess = (item) => {
    return{
        type: ADD_TO_CART,
        payload: item
    }
}
//add to cart
export const unknwonCartSuccess = (item) => {
    return{
        type: UNKNOWN_CART,
        payload: item
    }
}
export const getAllCartItemsSuccess = (data) => {
    return{
        type: GET_ALL_CART_ITEMS,
        payload: data
    }
}

export const getOneItemSuccess = (data) => {
    return{
        type: GET_CART_ITEM_BY_ID,
        payload: data
    }
}


export const userCartItemSuccess = (item) => {
    return{
        type: GET_USER_CART_ITEM,
        payload: item
    }
}
export const removeCartItemSuccess = (msg) => {
    return{
        type: REMOVE_ITEM_FROM_CART,
        payload: msg
    }
}

export const failed = (msg) => ({
    type: FAILED,
    payload: msg
});

export const addToCart = (cartItem) => {
    return (dispatch) => {
        axios.post("/cart/create", cartItem)
            .then(res => {
                dispatch(addToCartSuccess(res.data))
            })
            .catch(err =>dispatch(failed(err)))
    }
};
export const unknownCart = (cart) => {
    return (dispatch) => {
        dispatch()
        .then(res => {
            localStorage.setItem("cart", cart);
            dispatch(unknwonCartSuccess(cart))
        })
        .catch(err =>dispatch(failed(err)))
    }
}
export const getCart = (data) => {
    return (dispatch) => {
        axios.get("/cart/get")
            .then(res => {
                dispatch(getAllCartItemsSuccess(res.data))
            })
            .catch(err =>dispatch(failed(err)))
}
};

export const getUserCart = (id) => {
    return (dispatch) => {
        axios.get(`/cart/${id}`)
            .then(res => {
                dispatch(userCartItemSuccess(res.data))
            })
            .catch(err =>dispatch(failed(err)))
}
}

export const updateCart = (cartItem) => {
    return (dispatch) => {
        axios.post("/cart/update", cartItem)
            .then(res => {
                dispatch(addToCartSuccess(res.data))
            })
            .catch(err =>dispatch(failed(err)))
    }
}

export const deleteCartItem = (id) => {
    console.log(id)
    return (dispatch) => {
        axios.delete(`/cart/delete/${id}`)
        .then(res => {
            console.log(res)
             dispatch(removeCartItemSuccess(res.msg))
        })
        .catch(err => console.log(err))
    }
}