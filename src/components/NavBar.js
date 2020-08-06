import React, { Component } from "react";
import { Nav, Button, NavLink } from "react-bootstrap";

export default class NavBar extends Component {
	render() {
		return (
			<Nav className="navbar navbar-expand-lg navbar-dark bg-mattBlackLight fixed-top">
				<Button className="navbar-toggler sideMenuToggler" type="button">
					<span className="navbar-toggler-icon"></span>
				</Button>

				<NavLink className="navbar-brand" href="#">
					HEZARFEN SPACE
				</NavLink>
				<Button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</Button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle p-0"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup={true}
								aria-expanded={false}
							>
								<i className="material-icons icon">person</i>
								<span class="text">Account</span>
							</a>
							<div
								class="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdown"
							>
								<a class="dropdown-item" href="#">
									Action
								</a>
								<a class="dropdown-item" href="#">
									Another action
								</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</Nav>
		);
	}
}
