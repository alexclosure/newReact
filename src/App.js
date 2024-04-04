import React from "react"
import styles from "./modules/App.module.css"
import AppComponent from "./components/AppComponent"
import { useState } from "react"

const App = () => {
	const [state, setState] = useState({ value: "", list: [], error: "" })

	const onInputButtonClick = () => {
		const value = +prompt("Enter value").trim().toFixed(0)
		console.log("value", value)
	}

	return (
		<div className={styles.app}>
			<AppComponent />
		</div>
	)
}

export default App
