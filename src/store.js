import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import rootReducer from "./store/reducers/index"; // Same as the next line
import rootReducer from "./reducers";

// This is to setup our and connect our store to Redux Dev Tools (For Browsers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// This is our redux store.
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)) 
);

export default store;
