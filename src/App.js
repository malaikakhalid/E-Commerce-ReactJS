import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import "./component/Header.css";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import { auth } from "./config/firebase";
import Payment from './component/Payment'

import "./App.css";
import { useStateValue } from "./component/StateProvider";

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
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/payment">
            <Payment />
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
