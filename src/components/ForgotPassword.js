import React, { useState } from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import alertify from "alertifyjs";

import fire from "../firebase";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	const [isSend, setIsSend] = useState(null);

	const forgotPassword = (e) => {
		const email = document.querySelector("#email").value;
		fire
			.auth()
			.sendPasswordResetEmail(email)
			.then((u) => {
				setIsSend(true);
				alertify.set("notifier", "position", "top-center");
				alertify.success("Mail Gonderildi", 4);
			})
			.catch((err) => {
				alertify.set("notifier", "position", "top-center");
				alertify.error(err.toString(), 4);
			});
		e.preventDefault();
	};

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
					/>
				</Link>
				<h1 className="login-text  text-white mt-3 mb-3 text-center">
					Parolami Unuttum
				</h1>
				{/* LOGIN FORM */}

				<Form className="w-100" onSubmit={forgotPassword}>
					<Form.Group className="mt-5">
						<Form.Control
							id="email"
							type="email"
							placeholder="E-mail"
							required
						/>
					</Form.Group>

					<Button
						type="submit"
						className="w-100 mt-4 login-button"
						variant="primary"
					>
						Parola Yenile
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export { ForgotPassword };
