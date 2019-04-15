import React, { Component } from "react"
import Navigation from './Navigation.jsx';
import Page from './Page.jsx'

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			appVersion: '1.0.0'
		};
	}

	render () {
		const { appVersion } = this.state;

		return (
			<div>
				<Navigation appVersion={appVersion} />
				<Page />
			</div>
		);
	}
}

export default App;