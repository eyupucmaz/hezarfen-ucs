import React, { Component } from "react";
import { Container, Image, Form, Button, NavLink } from "react-bootstrap";
import "./Login.css";
import fire from "../firebase";
import { Link } from "react-router-dom";

class Login extends Component {
	login() {
		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;

		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((u) => {
				console.log("You are inn");
			})
			.catch((err) => {
				console.log("Error:" + err.toString());
			});
	}
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
					<h1 className="login-text text-white mt-3 mb-3">Giriş Yap</h1>
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
							Giriş Yap
						</Button>
					</Form>
					<div className="login-footer">
						<NavLink className="forget-password float-left p-0" href="#">
							Parolami Unutum
						</NavLink>
						<Link to="/signup">
							<NavLink
								onClick={this.signUp}
								className="signup float-right p-0"
								href="#"
							>
								Kayıt Ol
							</NavLink>
						</Link>
					</div>
				</div>
			</Container>
		);
	}
}

export { Login };
