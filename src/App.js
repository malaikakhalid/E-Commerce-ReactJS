import React from "react";
import Header from "./component/Header";
import "./component/Header.css";
import Home from "./component/Home";
import Checkout from './component/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/Login'

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header/>
        <Switch>
        <Route path="/checkout">
           
            <Checkout />
          </Route>
         <Route path="/Login">
           
            <Login />
          </Route>

          <Route path="/">
          
            <Home />
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// npm i react-currency-format
// npm i react-router-dom
// npm i material ui (core, icons)
// npm i firebase 