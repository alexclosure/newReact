import React from "react"
import InfoLayout from "./InfoLayout"
import PropTypes from "prop-types"

const Info = ({ ...props }) => {
	//if (!props.isGameEnded) props.setIsDraw(props.field.every((el) => el !== ""))
	//console.log(`winner`, props.winner)
	return <InfoLayout {...props} />
}
/* Info.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	setIsDraw: PropTypes.func
} */
export default Info
