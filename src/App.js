import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from './components/Login/Login';
import Preferences from "./components/Preferences/Preferences";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

function App() {
  const [token, setToken] = useState();
  //if(!token) {
   // return <Login setToken={setToken} />
  //}

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
