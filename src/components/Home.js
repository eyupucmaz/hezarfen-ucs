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
					<Image
						className="logo img-fluid"
						src={require("../image/logo-text.svg")}
					/>
					<h1 className="home-text text-center text-wrap">
						Merhaba Dunyali
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
							<Button className="mt-4" variant="primary" block>
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
