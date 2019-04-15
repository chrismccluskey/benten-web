import React, { Component } from "react"
import styles from "../styles/file-browser.css"
import FileBrowserItem from "./FileBrowserItem.jsx"

class FileBrowser extends Component {
	render () {
		return (
			<div className={styles.file_browser}>
				<div>File Browser</div>
				<div className={styles.file_browser_files}>
					<FileBrowserItem fileName="clupton+-+dancing+in+the+stars.mp3" fileSize="3670016" artistName="Neil Clupton" songTitle="Dancing in the Stars" genre="Rock" subGenre="Alternative" />
					<FileBrowserItem fileName="nova experience, the - space - 03 - post-human.aiff" fileSize="2831155" artistName="The Nova Experience" songTitle="Post-Human" genre="Techno" subGenre="Hard Techno" />
					<FileBrowserItem fileName="dadology.flac" fileSize="11219763" artistName="Dadology" songTitle="Pump It Up!" genre="House" subGenre="Tech House" />
					<FileBrowserItem fileName="dj t9000 - sonic boom.m4a" fileSize="6291456" artistName="DJ T9000" songTitle="Sonic Boom" genre="Breaks" subGenre="Electro" />
				</div>
			</div>
		)
	}
}

export default FileBrowser;