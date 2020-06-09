import React from "react";
import Checkout from "./Checkout";
import CartSVG from "../CartSVG";
import { Link } from "react-router-dom";
import "./Cart.css";

//need to tidy up Cart display, add scroll function, add CSS transition to order items, and complete the Checkout with 'pay function'

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
