import React from 'react';
import Cart from './Cart';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App.js';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/cart" component={Cart} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Router;