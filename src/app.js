import styles from "./app.module.css"
import data from "./data.json"
import { useState } from "react"

export const App = () => {
	const [steps] = useState([...data])
	const [activeIndex, setActiveIndex] = useState(0)
	//первый и последний шаг
	const firstStep = steps[0].id
	const lastStep = steps[steps.length - 1].id
	//кнопка вперед возвращает jsx с текстом кнопки и надписью под ней
	const clickForward = () => {
		if (activeIndex < steps.length - 1) {
			return (
				(<div className={styles["steps-content"]}>{steps[activeIndex].content}</div>),
				(<button className={styles["steps-item-button"]}>{steps[activeIndex].title}</button>),
				setActiveIndex(activeIndex + 1)
			)
		}
	}
	// кнопка назад возвращает дефолтные стили на элементы, которые равны текущему и больше нуля, что бы не уйти за пределы массива
	// forEach что бы VSCode не ругался на Array.prototype.map() expects a value to be returned at the end of arrow function
	const clickBackward = () => {
		return steps.forEach((item, index) => {
			//тут сам себе немного усложнил, item.id можно заменить так же на index
			if (index === activeIndex && item.id - 1 >= 1) {
				return (
					(<div className={styles["steps-content"]}>{item.content}</div>),
					(<button className={styles["steps-item-button"]}>{item.title}</button>),
					setActiveIndex(activeIndex - 1)
				)
			}
		})
	}

	const clickReload = () => setActiveIndex(0)

	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{/* тут заполняем наши элементы данными из json параллельно выполняя проверку индексов для назачения классов
						выглядить стремно, но я не придумал как это вынести в функцию, скорее всего ответ я узнаю в решении*/}
						{steps.map((item, index) => (
							<li
								className={
									styles["steps-item"] +
									" " +
									(index === activeIndex ? styles.active : null) +
									" " +
									(index >= firstStep - 1 && index <= activeIndex ? styles.done : null)
								}
								key={index}
							>
								<button className={styles["steps-item-button"]}>{index + 1}</button> {item.title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button className={styles.button} onClick={clickBackward}>
							Назад
						</button>
						{activeIndex === lastStep - 1 ? (
							<button className={styles.button} onClick={clickReload}>
								Ещё порцию
							</button>
						) : (
							<button className={styles.button} onClick={clickForward}>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
