import './styles/index.css';

import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx'

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<App />, document.querySelector("#app"));
})