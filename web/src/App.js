import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
	return (
		<React.Fragment>
			<div>
				<header>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
					/>
				</header>
			</div>
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
		</React.Fragment>
	);
}

export default App;
