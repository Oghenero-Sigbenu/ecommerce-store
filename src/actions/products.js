import axios from "../util/axios.base";
import {START, GET_PRODUCTS, GET_PRODUCT_BY_ID, FAILED, SET_SELECTED_PRODUCT}  from "./types";


export const start = () => ({
    type: START,
    payload:{
        isloading: true
    }
  });

  export const failed = (msg) => ({
      type: FAILED,
      payload: msg
  })

  export const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
  }

  export const getProductSuccess = (product) => {
    return {
        type: GET_PRODUCT_BY_ID,
        payload: product
    }
  }

  export const getProducts = () => {
      return (dispatch) => {
        dispatch(start())
          axios.get("/products/")
          .then(res => {
              dispatch(getProductsSuccess(res.data))
          })
          .catch(err => {
              dispatch(failed(err))
          })
      }
  }

  export const getProductById = (id) => {
    return (dispatch) => {
      dispatch(start())
        axios.get(`/products/${id}`)
        .then(res => {
            dispatch(getProductSuccess(res.data))
        })
        .catch(err => {
            dispatch(failed(err))
        })
    }
}

export const setSelectedProduct = (product) => {
    return {
      type: SET_SELECTED_PRODUCT,
      payload: product,
    };
  };