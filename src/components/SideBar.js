import React, { Component } from "react";
import "./SideBar.css";
import { Container } from "react-bootstrap";

class SideBar extends Component {
	render() {
		return (
			<Container fluid={true} className="sidebar">
				<p>Side BAr</p>
			</Container>
		);
	}
}

export { SideBar };
