import './styles.css';
import React from 'react';

// Redux =>
import { createStore, applyMiddleware } from 'redux';

// Thunk =>
import thunk from 'redux-thunk';

// Reducers =>
import CombineReducers from '@Src/combine-reducers';

// Provider =>
import {Provider} from 'react-redux';

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Login from '@Src/Login/Login';
import Home from '@Src/Home/Home';
import Scanner from '@Src/Scanner/Scanner';

// Redux Store is initialized here =>
const store = createStore(CombineReducers, applyMiddleware(thunk));


function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
                    <Route exact path="/" element={<Login/>}/>
					<Route exact path="/home" element={<Home/>}/>
					<Route exact path="/scanner" element={<Scanner/>}/>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
