import React, { Component } from "react";
import { Container } from "react-bootstrap";

class MainBar extends Component {
	render() {
		return (
			<Container fluid={true} className="mainbar">
				<p>MAIN BAR</p>
			</Container>
		);
	}
}

export { MainBar };
