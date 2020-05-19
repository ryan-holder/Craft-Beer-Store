import React from 'react';
import { formatPrice } from '../helpers'
import './Checkout.css'

class Checkout extends React.Component {

	renderOrder = (key) => {
		const beer = this.props.beers[key];
		const count = this.props.order[key];
		return (
			<li key={key} className="orderitem">
				{count} x {beer.name} {formatPrice(beer.price * count)}
				<button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
			</li>
		)
	}

	render() {		
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
			<div className="checkout">
				<h2 className="ordertitle">Order:</h2>
				<ul className="order">
				{orderIds.map(this.renderOrder)}
				</ul>
				<div className="total">
					Total: 
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		)
	}
}

export default Checkout;