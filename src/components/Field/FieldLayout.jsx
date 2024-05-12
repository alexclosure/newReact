import React from "react"
import styles from "./Field.module.css"
import PropTypes from "prop-types"

const FieldLayout = ({ ...props }) => {
	return (
		<div className={styles.block}>
			{props.field.map((_, index) => (
				<span
					className={`${styles.board} ${styles.cell}`}
					key={index}
					disabled={props.isGameEnded ? true : false}
					//если игра завершена, перестаём вызывать Click(), если нет, вызываем и передаём индекс ячейки
					onClick={props.isGameEnded ? null : () => props.propFunction(index)}
				>
					{props.field[index]}
				</span>
			))}
		</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	propFunction: PropTypes.func,
	isGameEnded: PropTypes.bool
}
export default FieldLayout
