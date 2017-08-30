import React from 'react';
import ReactDOM from 'react-dom';
import {Route,} from 'react-router-dom'
import Home from './containers/Home'
import Rank from "./containers/Rank/index";
import {Provider} from 'react-redux';
import store from './redux/store';

import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import Wrap from "./components/Wrap/index";
import Profile from "./containers/Profile/index";
import Join from "./containers/Join/index";
let history = createHistory();

window._store = store;
ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		<Wrap>
			<Route exact path="/" component={Home} />
			<Route path="/rank" component={Rank} />
			<Route path="/profile" component={Profile}/>
			<Route exact path="/join" component={Join}/>
		</Wrap>
		</ConnectedRouter>
	</Provider>
  , document.querySelector('#root'));
