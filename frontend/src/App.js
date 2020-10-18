import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Scan from './Scan';
import Home from './Home';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/scan" component={Scan} />
		</Switch>
	</BrowserRouter>
);
