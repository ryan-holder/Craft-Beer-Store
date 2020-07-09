import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import samplebeers from "./samplebeers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
	state = {
		beers: samplebeers,
		order: {},
	};

	componentDidMount() {
		this.saveUserToLocalStorage();
	}

	componentDidUpdate() {
		localStorage.setItem("user", JSON.stringify(this.state.order));
	}

	saveUserToLocalStorage = () => {
		const localStorageRef = localStorage.getItem("user");
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
	};

	addToOrder = (key) => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};

	decrementOrder = (key) => {
		const order = { ...this.state.order };
		order[key] === 1 ? delete order[key] : (order[key] = order[key] - 1);
		this.setState({ order });
	};

	removeFromOrder = (key) => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({ order });
	};

	render() {
		const { beers, order } = this.state;
		return (
			<BrowserRouter>
				<Header />
				<Nav />
				<Route
					exact
					path="/Craft-Beer-Store"
					render={() => (
						<Cart
							beers={beers}
							order={order}
							addToOrder={this.addToOrder}
							decrementOrder={this.decrementOrder}
							removeFromOrder={this.removeFromOrder}
						/>
					)}
				/>
				<Switch>
					<Route
						exact
						path="/Craft-Beer-Store"
						render={() => <Store beers={beers} addToOrder={this.addToOrder} />}
					/>
					<Route
						path="/Craft-Beer-Store/checkout"
						render={() => (
							<Checkout
								beers={beers}
								order={order}
								addToOrder={this.addToOrder}
								decrementOrder={this.decrementOrder}
								removeFromOrder={this.removeFromOrder}
							/>
						)}
					/>
					<Route exact component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
