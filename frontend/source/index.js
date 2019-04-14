import './styles/index.css';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx'

/*
import Logo from './images/logo.png';
function thing() {

	let logo = new Image();
	logo.src = Logo;
	logo.width = 75;

	let el = document.createElement('div');
	el.appendChild(logo);

	document.body.appendChild(el);

}
thing();
*/

ReactDOM.render(<App />, document.querySelector("#app"));