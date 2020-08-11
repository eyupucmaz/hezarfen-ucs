import React, { Component } from "react";
import "./App.css";
import { Login, Home, Signup, ForgotPassword, Dashboard } from "./components";
import { Container } from "react-bootstrap";
import fire from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
	constructor(props) {
		super();

		this.state = {
			user: null,
		};

		this.authListener = this.authListener.bind(this);
	}

	componentDidMount() {
		this.authListener();
	}
	authListener() {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			} else {
				this.setState({ user: null });
			}
		});
	}

	render() {
		return (
			<Router>
				<Container fluid className="p-0 vh-100 vw-100">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/signin" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/forgot-password" component={ForgotPassword} />
						<Route exact path="/dashboard" component={Dashboard} />
					</Switch>
				</Container>
			</Router>
		);
	}
}
