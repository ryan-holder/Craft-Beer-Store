import React from "react";
import { formatPrice } from "../../helpers";
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
				<div className="order-item-button-container">
					<button
						className="order-item-button"
						onClick={() => this.props.addToOrder(key)}
					>
						&#9650;
					</button>
					<button
						className="order-item-button"
						onClick={() => this.props.removeFromOrder(key)}
					>
						&times;
					</button>
					<button
						className="order-item-button"
						onClick={() => this.props.decrementOrder(key)}
					>
						&#9660;
					</button>
				</div>
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
					<h3 className="checkout-title">Your Cart</h3>
					<ul className="checkout-order">{orderIds.map(this.renderOrder)}</ul>
					<div className="checkout-total">
						<span>
							Total: <strong>{formatPrice(total)}</strong>
						</span>
						<button className="checkout-button">Pay Now</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Checkout;
