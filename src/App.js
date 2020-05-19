import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import samplebeers from './samplebeers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
	state = {
			beers: samplebeers,
			order: {}
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
	    <BrowserRouter>
	    	<Header />
	    	<Nav />
	    	 	<Route 
		    		exact 
		    		path="/"
		    		render={() => <Cart beers={this.state.beers} order={this.state.order} removeFromOrder={this.removeFromOrder}/>}
		    	/>
		    	<Switch>
			    	<Route 
			    		exact path="/"
			    		render={() => <Store beers={this.state.beers} addToOrder={this.addToOrder} />}
			    	/>
			    	<Route
			    		path="/Checkout"
			    		render={() => <Checkout beers={this.state.beers} order={this.state.order} removeFromOrder={this.removeFromOrder} />}
			    	/>
			    	<Route exact component={NotFound} />
		    	</Switch>
	    </BrowserRouter>
  	);
	}
}

export default App;
