import React from "react"
import styles from "./Info.module.css"
import PropTypes from "prop-types"

const InfoLayout = ({ ...props }) => {
	console.log(props)
	return (
		<>
			<div>{props.isDraw && props.isGameEnded ? `Ничья` : ``}</div>
			<div>
				{props.isGameEnded ? `Игра завершена, победил ${props.currentPlayer}` : `Ходит: ${props.currentPlayer}`}
			</div>

			{props.isGameEnded || props.isDraw ? (
				//рисуем кнопку если игра закончилась или ничья
				<button className={styles.button} onClick={props.initialParams}>
					Oh shit, here we go again
				</button>
			) : null}
		</>
	)
}
InfoLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	initialParams: PropTypes.func
}
export default InfoLayout
