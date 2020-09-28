import { GET_USER_CART_ITEM, UNKNOWN_CART} from "../actions/types";

const cart = localStorage.getItem("cart");

const initial = {
  cart,
    product: "",
    isLoading: true
  }

export default (state = initial, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_USER_CART_ITEM:
        return { 
          ...state,
           cart: payload,
          isLoading: false
         };
         case UNKNOWN_CART:
        return { 
          ...state,
           cart: payload,
          isLoading: false
         };
      default:
        return state;
    }
  };
  