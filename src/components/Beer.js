import React from "react";
import { formatPrice } from "../helpers";
import "./Beer.css";

class Beer extends React.Component {
	render() {
		const { name, image, desc, price, status } = this.props.details;
		const isAvailable = status === "available";

		return (
			<div className="beer">
				<img className="beerimg" src={image} alt={name} />
				<span className="beertitle">
					<h3 className="beername">{name}</h3>
					<span className="beerprice">{formatPrice(price)}</span>
				</span>
				<p className="beerdesc">{desc}</p>
				<span className="buttoncontainer">
					<button
						disabled={!isAvailable}
						className="beerbutton"
						onClick={() => this.props.addToOrder(this.props.index)}
					>
						{isAvailable ? "Add to cart" : "SOLD OUT"}
					</button>
				</span>
			</div>
		);
	}
}

export default Beer;
