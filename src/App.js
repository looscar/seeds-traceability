import './styles.css';
import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Login from '@Src/Login/Login';
import Home from '@Src/Home/Home';
import StartScanner from '@Src/Scanner/Index';
import Scanner from '@Src/Scanner/Scanner';

// Database
import { db } from '@Src/Global/DB';

// Actions
import { Encrypt } from './Global/Actions';


const App = ({ global: { auth }}) => {
	useEffect(() => {
		// Create initial accounts:
		db.__auth__.bulkPut([
			{ uuid: "1bb98540-0d9d-3061-ebee-a29fa4cab529", username: 'diego.mendizabal', password: Encrypt('seed-harvest-0775'), firstname : 'Diego', lastname : 'Mendizabal', profile: 'admin' },
			{ uuid: "7e42ca0c-8e0b-5cc8-706c-975808dd0a46", username: 'looscar', password: Encrypt('looscar'), firstname : 'Oscar', lastname : 'López', profile: 'admin' },
		]);
	}, []);


	return (
		<Router>
			<Routes>
				{!auth && window.location.pathname !== '/' ?
					// Redirect to login until authenticate:
					<Route path="*" element={<Login/>}/>
				:
					// Allow access to system:
					<React.Fragment>
						<Route exact path="/" element={(auth) ? <Home/> : <Login/>}/>
						<Route exact path="/scanner" element={<StartScanner/>}/>
						<Route exact path="/scanner/:cliente/:proceso" element={<Scanner/>}/>
					</React.Fragment>
				}
			</Routes>
		</Router>
	);
};


// mapStateToProps =>
function mapStateToProps(state){
    return state;
}

// Bind actions to be used along redux =>
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        // Actions
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
