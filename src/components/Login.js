import React from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import "./Login.css";
import fire from "../firebase";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

const Login = () => {
	// const [isLogin, setIsLogin] = useState();

	const login = (e) => {
		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;

		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((u) => {
				// setIsLogin(true);
				alertify.set("notifier", "position", "top-center");
				alertify.success("Giris Yaptiniz", 4);
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
						alt="Hezarfen Space Logo"
					/>
				</Link>
				<h1 className="login-text text-white mt-3 mb-3">Giriş Yap</h1>
				{/* LOGIN FORM */}
				<Form className="w-100" onSubmit={login}>
					<Form.Group className="mt-5">
						<Form.Control
							id="email"
							type="email"
							placeholder="E-mail"
							required
						/>
					</Form.Group>

					<Form.Group className="mt-4">
						<Form.Control
							id="password"
							type="password"
							placeholder="Parola"
							required
						/>
					</Form.Group>

					<Button
						type="submit"
						className="w-100 mt-4 login-button"
						variant="primary"
					>
						Giriş Yap
					</Button>
				</Form>

				<div className="login-footer">
					<Link to="/forgot-password">
						<p className="forgot-password float-left p-0">Parolami Unutum</p>
					</Link>
					<Link to="/signup">
						<p className="signup float-right p-0">Kayıt Ol</p>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export { Login };
