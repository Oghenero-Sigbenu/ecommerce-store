import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Logout from "./pages/Logout";
import Signup from "./pages/signup";
import Header from "./components/Common/NavbarApp/NavbarApp";
import Products from "./pages/products";
import ProductDetail from "./pages/product-details";
import userCart from "./pages/cart";
import Checkout from "./pages/checkout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/cart/:id" component={userCart} />
        <Route path="/detail/:id" component={ProductDetail} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Signup} />
        <Route path="/" exact component={Home} />
        <Route render={() => <h2>Not Found</h2>} />
    </Switch>
    </div>
  );
}

export default App;
