import React, {  useEffect } from 'react';
import ProductCards from "../components/productCard";
import { useDispatch, useSelector } from "react-redux";
import {getProductById} from "../actions/products";
import Spinner from "../components/Common/Spinner";

function Products ({match}) {
    const dispatch = useDispatch();

    useEffect(() => {
        const productId = match.params.id;
        console.log(productId)
      dispatch(getProductById(productId))
    }, []);// eslint-disable-next-line
  
    const product = useSelector(state => state.product.product);
    const isLoading = useSelector(state => state.product.isLoading);
    return(
        <div>
            {/* <h4>Products</h4> */}
            {isLoading ? <Spinner/> :
            <><h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
           </> }
        </div>
    )
}

export default Products;