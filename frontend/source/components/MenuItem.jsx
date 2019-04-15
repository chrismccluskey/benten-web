import React, { Component } from "react";
import styles from "../styles/menu-item.css";

class MenuItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { label } = this.props;

		return (
			<div className={styles.menu_item}>
				{label}
			</div>
		);
	}
}

export default MenuItem;