import React, { useState } from "react"
import styles from "../modules/App.module.css"

const AppComponent = () => {
	const [value, setValue] = useState("")
	const [list, setList] = useState([])
	const [error, setError] = useState("")

	const onInputButtonClick = () => {
		const promptValue = prompt("Enter value")
		if (promptValue.length < 3) {
			setError("Введенное значение должно содержать минимум 3 символа")
		} else {
			setValue(promptValue)
			setError("")
		}
	}

	const onAddButtonClick = () => {
		if (isValueValid()) {
			//const updatedList = [...list, { id: Date.now(), value: value }]
			// Updating state based on the previous state
			setList((prevList) => [...prevList, { id: Date.now(), value: value }])
			setValue("")
			setError("")
		}
	}
	//Собираем время и дату
	const timeFormat = (timestamp) => {
		const date = new Date(timestamp)
		const formattedDate =
			("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear()
		const formattedTime =
			("0" + date.getHours()).slice(-2) +
			":" +
			("0" + date.getMinutes()).slice(-2) +
			":" +
			("0" + date.getSeconds()).slice(-2)

		return `${formattedDate} ${formattedTime}`
	}
	//Отдельная функция для рендера списка и конката времени
	const renderList = () => {
		return list.map((item) => (
			<li className="list-item" key={item.id}>
				{item.value} {timeFormat(item.id)}
			</li>
		))
	}
	const isValueValid = () => (String(value).length >= 3 ? true : false)

	//происходит чёрная магия
	return (
		<div className={styles.app}>
			<h1 className="page-heading">Ввод значения</h1>
			<p className="no-margin-text">
				Текущее значение <code>value</code>: "<output className="current-value">{value}</output>"
			</p>{" "}
			{error && <div className={styles.error + " " + styles.textDanger}>{error}</div>}{" "}
			<div className="buttons-container">
				<button className="button" onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className="button" disabled={!isValueValid()} onClick={onAddButtonClick}>
					Добавить в список
				</button>
			</div>
			<div className="list-container">
				<h2 className="list-heading">Список:</h2>
				{list.length > 0 ? renderList() : <p className="no-margin-text">Нет добавленных элементов</p>}
			</div>
		</div>
	)
}

export default AppComponent
