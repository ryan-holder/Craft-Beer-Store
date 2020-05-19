import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li className="list">About</li>
				<li>
					<Link to="/checkout">Checkout</Link>
				</li>
				<li className="list">Contact</li>
			</ul>
		</nav>
	);
};

export default Nav;
