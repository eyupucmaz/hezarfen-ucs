import React, { Component } from "react";
import "./App.css";
// import { Container, Row } from "react-bootstrap";
import { Login } from "./components";
import { Container } from "react-bootstrap";

export default class App extends Component {
	render() {
		return (
			<Container fluid className="p-0 vh-100 vw-100">
				<Login />
			</Container>
		);
	}
}
