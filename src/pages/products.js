import React, {  useEffect } from 'react';
import ProductCards from "../components/productCard";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../actions/products";
import Spinner from "../components/Common/Spinner";

function Products () {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts())
    },[]);// eslint-disable-next-line
  
    const products = useSelector(state => state.product.products);
    const isLoading = useSelector(state => state.product.isLoading);
    return(
        <div>
            {/* <h4>Products</h4> */}
            {isLoading ? <Spinner/> :
                <ProductCards products={products} isLoading={isLoading}/> 
            }
        </div>
    )
}

export default Products;