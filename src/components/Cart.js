import React from 'react';
import CartSVG from '../CartSVG';
import { formatPrice } from '../helpers';
import { Link } from 'react-router-dom';
import './Cart.css';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.toggleAppear = this.toggleAppear.bind(this);
		this.state = { 'active': false }
	}


// renders a list item for each order in the cart
// minimises the amount of code in render function
	renderOrder = (key) => {
		const { name, image, price } = this.props.beers[key];
		const count = this.props.order[key];
		return (
			<li className="cart-li" key={key}>
				<img src={image} alt={name}/>
				<span className="item">
					{count} x {name} 
				</span>
				<span className="item-price">
					{formatPrice(price * count)}
				</span>
			</li>
		)
	}

	// toggles classname on cart-wrapper to make
	toggleAppear = () => {
		const currentState = this.state.active;
		this.setState({ 'active': !currentState });
	}

	render() {
		// reduce function returns the total price from available beers in order
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((tally, key) => {
			const beer = this.props.beers[key];
			const count = this.props.order[key];
			const isAvailable = beer && beer.status === 'available';
			if (isAvailable) {
				return tally + (count * beer.price);
			}	
			return tally;
		}, 0);

		return (
			<div className={this.state.active ? "cart-wrapper-active" : "cart-wrapper"}	>
				<div className="cart-svg" onClick={this.toggleAppear}>
					<CartSVG />
				</div>
				<div className="cart">
					<ul className="cart-ul">
						{orderIds.map(this.renderOrder)}
					</ul>
					<button><Link to="/checkout">Checkout: {formatPrice(total)}</Link></button>
				</div>
			</div>
		)
	}
}

export default Cart;