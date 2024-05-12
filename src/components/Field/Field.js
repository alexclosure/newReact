import React from "react"
import FieldLayout from "./FieldLayout"
import PropTypes from "prop-types"

const Field = ({ ...props }) => {
	//обновляем поле, ибо я так и не понял, как изменить отдельное значение props.field без заморочек
	const updatedField = [...props.field]
	// храним победителей
	let winnerX = false
	let winner0 = false
	// функция, которая вызывается при каждом изменении поля
	const Click = (index) => {
		props.currentPlayer === "X"
			? props.setCurrentPlayer(props.PLAYERLIST.O)
			: props.setCurrentPlayer(props.PLAYERLIST.X)
		updatedField[index] = props.currentPlayer

		props.setField([...updatedField])
		if (!props.isGameEnded) props.setIsDraw(props.field.every((el) => el !== ""))
		return props.setIsGameEnded ? null : ""
	}
	//определение победил ли X
	winnerX = props.WIN_PATTERNS.some((el) => {
		return el.every((item) => props.field[item] === "X") ? true : ""
	})
	//определение победил ли 0
	winner0 = props.WIN_PATTERNS.some((el) => {
		return el.every((item) => props.field[item] === "0") ? true : ""
	})
	//если кто то из них победил, завершаем игру
	if (winnerX || winner0) {
		props.setIsGameEnded(true)
	}
	// устанавливаем победившего игрока, т.к. это значение мы инвертируем в Click()
	if (winnerX) {
		props.setCurrentPlayer(props.PLAYERLIST.X)
	} else if (winner0) {
		props.setCurrentPlayer(props.PLAYERLIST.O)
	}

	return <FieldLayout {...props} propFunction={Click} />
}

Field.propTypes = {
	props: PropTypes.array,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setField: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	PLAYERLIST: PropTypes.object,
	WIN_PATTERNS: PropTypes.array,
	setIsDraw: PropTypes.func
}
export default Field
