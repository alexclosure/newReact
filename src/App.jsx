import { useState, useEffect } from "react"
import styles from "./App.module.css"

export const Calc = () => {
	const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "-"]
	const [operand1, setOperand1] = useState("")
	const [operator, setOperator] = useState("")
	const [operand2, setOperand2] = useState("")
	//храним результат что бы понимать нужно ли нам красить дисплей
	const [result, setResult] = useState(false)
	//для проверки наличия всех трёх переменных, используется для блокировки кнопки = и вычисления результата
	const [isCorrectExpression, setIsCorrectExpression] = useState(false)
	//хранит данные для дисплея
	const [display, setDisplay] = useState("")
	let totalResult = 0
	useEffect(() => {
		// Обновляем отображаемое выражение и делаем проверку на корректность при изменении операндов и оператора
		setDisplay(operand1 + operator + operand2)
		if (operand1 && operand2 && operator) setIsCorrectExpression(true)
	}, [operand1, operator, operand2])
	// эвент нужен, что бы получать textContent из button
	const selectNumbers = (event) => {
		const textContent = event.target.textContent

		// определяем знак
		if (textContent === "+") return setOperator("+")
		if (textContent === "-") return setOperator("-")

		// если знак ещё не выбран, значит у нас первый операнд
		if (!operator) {
			setOperand1((prevOperand) => prevOperand + textContent)
		}

		if (textContent === "+" || textContent === "-") return setOperator(textContent)
		//если знак выбран, значит у нас второй операнд
		if (operator && !totalResult) {
			setOperand2((prevOperand) => prevOperand + textContent)
		}
		if (operator && totalResult) {
			setOperand1(totalResult)
			setOperand2("")
			outputResult()
		}
	}
	console.log(`display`, display)
	// считаем все наши значения с приведением к Number
	const outputResult = () => {
		setResult(true)
		if (operator === "+" && isCorrectExpression) {
			setDisplay(Number(operand1) + Number(operand2))
			totalResult = Number(operand1) + Number(operand2)
			setOperand1(totalResult)
			setOperand2("")
			setOperator("")
		}

		if (operator === "-" && isCorrectExpression) {
			setDisplay(Number(operand1) - Number(operand2))
			totalResult = Number(operand1) - Number(operand2)
			setOperand1(totalResult)
			setOperand2("")
			setOperator("")
		}

		console.log(totalResult)
		//setOperator("")
		//setOperand1(result)
	}
	// сбрасываем все значения
	const reset = () => {
		setOperand1("")
		setOperand2("")
		setOperator("")
		setDisplay("")
		setResult(false)
	}
	console.log(`operand1 `, operand1)
	console.log(`operator `, operator)
	console.log(`operand2 `, operand2)
	console.log(`isCorrectExpression `, isCorrectExpression)

	// генерим массив на 3*4 с значениями из NUMS

	const defaultRender = () => {
		return (
			<table>
				<tbody>
					{/* генерим массив на 4 ряда */}
					{[...Array(4)].map((a, rowIndex) => (
						<tr key={rowIndex}>
							{/* и внутри него генерим массив на 3 столбца */}
							{[...Array(3)].map((a, columnIndex) => (
								<td key={columnIndex}>
									<button className={styles["glow-on-hover"]} type="button" onClick={selectNumbers}>
										{NUMS[rowIndex * 3 + columnIndex]}
									</button>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		)
	}

	return (
		<div className="container">
			<div className={`${styles["glow-on-hover-display"]} ${result ? styles["crimson"] : ""}`}>{display}</div>
			{defaultRender()}
			<button className={styles["glow-on-hover"]} type="button" onClick={reset}>
				С
			</button>
			<button
				className={styles["glow-on-hover"]}
				disabled={!isCorrectExpression}
				type="button"
				onClick={outputResult}
			>
				=
			</button>
		</div>
	)
}
