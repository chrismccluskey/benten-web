import React, { Component } from "react"
import styles from "../styles/file-browser-item.css"

class FileBrowserItem extends Component {
	render () {
		const { fileName, fileSize, artistName, songTitle, genre, subGenre } = this.props;
		return (
			<div className={styles.file_browser_item}>
				<div>{artistName}</div>
				<div>{songTitle}</div>
				<div>{genre}</div>
				<div>{subGenre}</div>
				<div>{fileSize}</div>
			</div>
		)
	}
}

export default FileBrowserItem;