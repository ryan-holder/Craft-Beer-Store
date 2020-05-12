import React, { Fragment } from 'react';
import Store from './components/Store';
import Cart from './components/Cart';
import Header from './components/Header'
import Nav from './components/Nav';
import samplebeers from './samplebeers';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: samplebeers,
			order: {}
		}
	}

	componentDidMount() {
		const localStorageRef = localStorage.getItem('user');
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef)});
		}
	}

	componentDidUpdate() {
		localStorage.setItem('user', JSON.stringify(this.state.order));
	}

	addToOrder = (key) => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	}

	removeFromOrder = (key) => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({ order });
	}

  render() {
  	return (
	    <Fragment>
	    	<Header />
	    	<Nav />
	    	<Store 
	    		beers={this.state.beers}
	    		addToOrder={this.addToOrder}
	    	/>
	    	<Cart 
	    		beers={this.state.beers}
	    		order={this.state.order}
	    		removeFromOrder={this.removeFromOrder}
	    	/>
	    </Fragment>
  	);
	}
}

export default App;
