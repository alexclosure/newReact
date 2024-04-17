import React from "react"
import styles from "./App.module.css"
import { Calc } from "./App.jsx"

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<Calc />
			</header>
		</div>
	)
}
