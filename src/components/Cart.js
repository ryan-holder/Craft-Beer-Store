// Add tally of items to cart svg; fix 'active' NavLinks so that you know what page you're on
// Add total to cart; try lining total on Checkout with prices, keeping button in middle

import React from "react";
import Checkout from "./Checkout";
import CartSVG from "../CartSVG";
import { Link } from "react-router-dom";
import "./Cart.css";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.toggleAppear = this.toggleAppear.bind(this);
		this.state = { active: false };
	}

	toggleAppear = () => {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	};

	render() {
		return (
			<div
				className={this.state.active ? "cart-wrapper-active" : "cart-wrapper"}
			>
				<div className="cart-svg" onClick={this.toggleAppear}>
					<CartSVG />
				</div>
				<div className="cart">
					<Checkout
						beers={this.props.beers}
						order={this.props.order}
						addToOrder={this.props.addToOrder}
						decrementOrder={this.props.decrementOrder}
						removeFromOrder={this.props.removeFromOrder}
					/>
				</div>
				<div className="cart-button-wrapper">
					<Link to="/checkout">
						<button className="cart-button">Checkout</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Cart;
