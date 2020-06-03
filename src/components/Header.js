import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="banner">
			<Link to="/">
				<img
					src="https://image.freepik.com/free-vector/vintage-octoberfest-black-logo_225004-1232.jpg"
					className="logo"
					alt="beer logo"
				/>
			</Link>
		</header>
	);
};

export default Header;
