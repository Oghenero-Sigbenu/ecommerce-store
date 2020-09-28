import { combineReducers } from "redux";
import authReducer from "./auth";
import productReducer from "./product";
import cartReducer from "./cart";
import orderReducer from "./order";

const rootReducer = combineReducers({
auth: authReducer,
product: productReducer,
cart: cartReducer,
order: orderReducer
});

export default rootReducer;