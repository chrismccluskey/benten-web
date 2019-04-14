import React, { Component } from "react";
import styles from "../styles/home-button.css";
import Logo from '../images/logo.png';

class HomeButton extends Component {
	render() {
		return (
			<div className={styles.home_button}>
				<img src={Logo} className={styles.home_button_logo} />
			</div>
		);
	}
}

export default HomeButton;