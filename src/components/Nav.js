import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/checkout">Checkout</Link>
				</li>
				<li>
					<Link to="/">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
