import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import "./component/Header.css";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import { auth } from "./config/firebase";
import Payment from "./component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import { useStateValue } from "./component/StateProvider";
import Orders from './component/Orders';

const promise = loadStripe(
  "pk_test_51Hehn2B8kurbufNPcASIvov7VMOmzbeYG6HCEIvwZdoKJlu9Y4uT3zCoTjbV6SXhiNT1NycPfNaSQQkKXjOX8prL006absTXkQ"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        <Switch>
        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
// npm i @stripe/stripe-js
// npm i @stripe/react-stripe-js
// npm i axios
// npm i express
// npm install cores
