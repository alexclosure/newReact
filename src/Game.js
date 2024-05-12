import React, { useState } from "react"
import Field from "./components/Field/Field"
import Info from "./components/Information/Info"

const Game = () => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	const PLAYERLIST = {
		X: "X",
		O: "0"
	}
	const initialParams = () => {
		setCurrentPlayer(PLAYERLIST.X)
		setIsGameEnded(false)
		setIsDraw(false)
		setField(["", "", "", "", "", "", "", "", ""])
	}
	const [currentPlayer, setCurrentPlayer] = useState(PLAYERLIST.X)
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""])

	return (
		<div>
			<Info
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				setIsDraw={setIsDraw}
				initialParams={initialParams}
			/>
			<Field
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				PLAYERLIST={PLAYERLIST}
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				WIN_PATTERNS={WIN_PATTERNS}
				initialParams={initialParams}
				setIsDraw={setIsDraw}
			/>
		</div>
	)
}

export default Game
