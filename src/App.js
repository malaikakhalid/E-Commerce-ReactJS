import React from "react";
import Header from "./component/Header";
import "./component/Header.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Switch>
         <Route path="/checkout">
            <Header />
            <h1>I am checkout</h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
