import React from "react";
import { formatPrice } from "../helpers";
import "./Checkout.css";

class Checkout extends React.Component {
	renderOrder = (key) => {
		const { name, price, image } = this.props.beers[key];
		const count = this.props.order[key];
		return (
			<li key={key} className="order-item">
				<img src={image} alt={name} />
				<span className="order-item-title">
					{count} x {name}
				</span>
				<span className="order-item-price">{formatPrice(price * count)}</span>
				<button
					className="order-item-button"
					onClick={() => this.props.removeFromOrder(key)}
				>
					&times;
				</button>
			</li>
		);
	};

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((tally, key) => {
			const beer = this.props.beers[key];
			const count = this.props.order[key];
			const isAvailable = beer && beer.status === "available";
			if (isAvailable) {
				return tally + count * beer.price;
			}
			return tally;
		}, 0);

		return (
			<div className="checkout-wrapper">
				<div className="checkout">
					<h2 className="checkout-title">Your Cart</h2>
					<ul className="checkout-order">{orderIds.map(this.renderOrder)}</ul>
					<div className="checkout-total">
						Total:
						<strong>{formatPrice(total)}</strong>
						<button className="checkout-button">Pay Now</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Checkout;
