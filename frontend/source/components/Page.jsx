import React, { Component } from "react"
import styles from "../styles/page.css"
import FileBrowser from "./FileBrowser.jsx"

class Page extends Component {
	render () {
		return (
			<div className={styles.page}>
				<FileBrowser />
			</div>
		)
	}
}

export default Page;