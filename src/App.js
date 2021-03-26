import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute.js'
import BubblePage from './components/BubblePage.js'
import "./styles.scss";

function App() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick = {logout} href="#">logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path='/colors' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.