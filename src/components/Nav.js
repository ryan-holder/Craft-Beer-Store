import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink to="/">About</NavLink>
				</li>
				<li>
					<NavLink to="/checkout">Checkout</NavLink>
				</li>
				<li>
					<NavLink to="/">Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
