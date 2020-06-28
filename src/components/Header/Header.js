import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="banner">
			<Link to="/Craft-Beer-Store">
				<img
					src="https://seeklogo.com/images/C/craft-beer-logo-348F3B1B58-seeklogo.com.png"
					className="logo"
					alt="beer logo"
				/>
			</Link>
		</header>
	);
};

export default Header;
