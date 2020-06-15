import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink exact to="/">
						Store
					</NavLink>
				</li>
				<li>
					<NavLink to="/checkout">Checkout</NavLink>
				</li>
				<li>
					<NavLink exact to="/">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
