import './styles.css';
import React, { useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Service Worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Redux =>
import { createStore, applyMiddleware } from 'redux';

// Thunk =>
import thunk from 'redux-thunk';

// Reducers =>
import CombineReducers from '@Src/combine-reducers';

// Provider =>
import {Provider} from 'react-redux';

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Redux Store is initialized here =>
const store = createStore(CombineReducers, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
			<ToastContainer />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.unregister();