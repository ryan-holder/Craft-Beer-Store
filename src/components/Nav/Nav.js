import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink exact to="/Craft-Beer-Store/">
						Store
					</NavLink>
				</li>
				<li>
					<NavLink to="/Craft-Beer-Store/checkout">Checkout</NavLink>
				</li>
				<li>
					<NavLink exact to="/Craft-Beer-Store/">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
