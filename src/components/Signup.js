import React, { Component } from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import "./Signup.css";
import fire from "../firebase";
import { Link } from "react-router-dom";

class Signup extends Component {
	signUp(e) {
		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;
		const passwordTwo = document.querySelector("#password-2").value;
		password === passwordTwo ? console.log("equal") : console.log("not equal");
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((u) => {
				console.log("You are inn");
			})
			.catch((err) => {
				console.log(err.toString());
			});
		// e.preventDefault();
	}

	render() {
		return (
			<Container
				fluid
				className="container-login d-flex justify-content-center align-items-center vh-100 vw-100"
			>
				<div className="login-form d-flex flex-column justify-content-center align-items-center">
					{/* LOGO END TEXT */}
					<Link to="/">
						<Image
							className="logo img-fluid"
							src={require("../image/logo-text.svg")}
							alt="Hezarfen Space Logo"
						/>
					</Link>
					<h1 className="login-text text-white mt-3 mb-3">Kayıt Ol</h1>
					{/* LOGIN FORM */}
					<Form className="w-100" onSubmit={this.signUp}>
						{/* email */}
						<Form.Group className="mt-5">
							<Form.Control
								id="email"
								type="email"
								placeholder="E-mail"
								required
							/>
						</Form.Group>
						{/* password */}
						<Form.Group className="mt-4">
							<Form.Control
								id="password"
								type="password"
								placeholder="Parola"
							/>
						</Form.Group>
						{/* password check */}
						<Form.Group className="mt-4">
							<Form.Control
								id="password-2"
								type="password"
								placeholder="Parola"
							/>
						</Form.Group>
						{/* security code */}
						<Form.Group>
							<Form.Control type="number" placeholder="Guvenlik Kodu" />
						</Form.Group>
						{/* department */}
						<Form.Group controlId="exampleForm.ControlSelect2">
							<Form.Control as="select" placeholder="Birim Seciniz">
								<option>Birim Seçiniz...</option>
								<option>Yönetim</option>
								<option>Kimya</option>
								<option>Makine</option>
								<option>EDYB</option>
								<option>Omega</option>
								<option>Tasarım</option>
								<option>IRSRC</option>
								<option>Dil</option>
							</Form.Control>
						</Form.Group>
						<Button
							type="submit"
							className="w-100 mt-4 login-button"
							variant="primary"
							onClick={this.signUp}
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
