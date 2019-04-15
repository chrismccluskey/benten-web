import React, { Component } from "react";
import styles from "../styles/navigation.css";
import HomeButton from './HomeButton.jsx';
import MenuItem from './MenuItem.jsx';

class Navigation extends Component {
	render() {
		const { appVersion } = this.props;
		return (
			<div className={styles.navigation_menu}>
				<HomeButton />

				<MenuItem label="Files" />
				<MenuItem label="Help" />
				<MenuItem label="About" />

				<div className={styles.navigation_pusher}></div>

				<div className={styles.navigation_footer}>
					{appVersion}
				</div>
			</div>
		);
	}
}

export default Navigation;