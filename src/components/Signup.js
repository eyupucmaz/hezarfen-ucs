import React, { Component } from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import "./Login.css";
import fire from "../firebase";

class Signup extends Component {
	signUp() {
		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;

		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((u) => {
				console.log("You are inn");
			})
			.catch((err) => {
				console.log("Error:" + err.toString());
			});
	}

	render() {
		return (
			<Container
				fluid
				className="container-login d-flex justify-content-center align-items-center vh-100 vw-100"
			>
				<div className="login-form d-flex flex-column justify-content-center align-items-center">
					{/* LOGO END TEXT */}
					<Image
						className="logo img-fluid"
						src={require("../image/logo-text.svg")}
					/>
					<h1 className="login-text text-white mt-3 mb-3">Kayıt Ol</h1>
					{/* LOGIN FORM */}
					<Form className="w-100">
						<Form.Group className="mt-5">
							<Form.Control id="email" type="email" placeholder="E-mail" />
						</Form.Group>

						<Form.Group className="mt-4">
							<Form.Control
								id="password"
								type="password"
								placeholder="Parola"
							/>
						</Form.Group>

						<Button
							className="w-100 mt-4 login-button"
							variant="primary"
							onClick={this.login}
						>
							Kayıt Ol
						</Button>
					</Form>
				</div>
			</Container>
		);
	}
}

export { Signup };
