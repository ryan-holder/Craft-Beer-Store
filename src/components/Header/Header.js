import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="banner">
			<Link to="/Craft-Beer-Store">
				<img src={logo} className="logo" alt="beer logo" />
			</Link>
		</header>
	);
};

export default Header;
