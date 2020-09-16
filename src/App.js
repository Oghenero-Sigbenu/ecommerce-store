import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Logout from "./pages/Logout";
import Signup from "./pages/signup";
import Header from "./components/Common/NavbarApp/NavbarApp";
import ProductCards from "./components/productCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/products" component={ProductCards} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Signup} />
        <Route path="/" exact component={Home} />
        <Route render={() => <h2>Not Found</h2>} />
    </Switch>
    </div>
  );
}

export default App;
