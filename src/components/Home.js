import React, { Component } from "react";
import { Container, Button, Image } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<Container
				fluid
				className="container-home d-flex justify-content-center align-items-center vh-100 vw-100"
			>
				<div className="home-buttons d-flex flex-column justify-content-center align-items-center">
					{/* LOGO END TEXT */}
					<Link to="/">
						<Image
							className="logo img-fluid"
							src={require("../image/logo-text.svg")}
							alt="Hezarfen Space Logo"
						/>
					</Link>
					<h1 className="home-text text-center text-wrap">
						Hello World
						<span role="img" aria-label="alien">
							👽
						</span>
					</h1>
					{/* LOGIN FORM */}
					<div className="buttons">
						<Link to="/signin">
							<Button variant="primary" block>
								Giriş Yap
							</Button>
						</Link>
						<Link to="/signup">
							<Button to="/signup" className="mt-4" variant="primary" block>
								Kayıt Ol
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		);
	}
}

export { Home };
