import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Login from "./components/Login/Login";

function App() {
  //const [token, setToken] = useState();
  //if(!token) {
  //return <Login setToken={setToken} />

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
