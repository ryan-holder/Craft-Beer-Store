import React from "react";
import Checkout from "./Checkout";
import CartSVG from "../CartSVG";
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
						removeFromOrder={this.props.removeFromOrder}
					/>
					<button className="cart-button">
						Checkout: {/*formatPrice(total)*/}
					</button>
				</div>
			</div>
		);
	}
}

export default Cart;

//need to tidy up Cart display, add scroll function, add CSS transition to order items, and complete the Checkout with 'pay function'
