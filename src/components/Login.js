import React, { Component } from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
	render() {
		return (
			<Container
				fluid
				className="container-login d-flex justify-content-center align-items-center vh-100 vw-auto"
			>
				<div className="login-form d-flex flex-column justify-content-center align-items-center">
					{/* LOGO END TEXT */}
					<Image
						className="logo img-fluid"
						src={require("../image/logo-text.svg")}
					/>
					<h1 className="login-text text-white mt-3 mb-3">Giriş Yap</h1>
					{/* LOGIN FORM */}
					<Form className="w-100">
						<Form.Group className="mt-5" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="E-mail" />
						</Form.Group>

						<Form.Group className="mt-4" controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Parola" />
						</Form.Group>

						<Button
							className="w-100 mt-4 login-button"
							variant="primary"
							type="submit"
						>
							Giriş Yap
						</Button>
					</Form>
					<div className="w-100 mt-5">hels;ldak</div>
				</div>
			</Container>
		);
	}
}

export { Login };
