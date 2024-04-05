import React from "react"
import styles from "./modules/App.module.css"
import AppComponent from "./components/AppComponent"

const App = () => {
	return (
		<div className={styles.app}>
			<AppComponent />
		</div>
	)
}

export default App
