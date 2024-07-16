import React, { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";
import styles from "./App.module.css";
import {
  useRequestGetTasks,
  useRequestAddTask,
  useRequestDeleteTask,
  useRequestUpdateTask,
} from "./hooks";
import { MdDelete, MdEdit, MdAdd, MdOutlineCancel } from "react-icons/md";
import { FaSortAlphaUp } from "react-icons/fa";

export const App = () => {
  const TODOS_URL = " http://localhost:3001/todos";
  //флаг для обновления состояния из модулей
  const refreshTasks = () => {
    setRefreshFlag(!refreshFlag);
  };

  const [refreshFlag, setRefreshFlag] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [sortedArray, setSortedArray] = useState([]);
  const [sortingEnable, setSortingEnable] = useState(false);
  //получение изначально списка todo
  const { fullTodosList } = useRequestGetTasks(
    refreshTasks,
    TODOS_URL,
    !refreshFlag
  );
  //добавление, удаление, обновление задач из модулей
  const { requestAddNewTask } = useRequestAddTask(refreshTasks, TODOS_URL);
  const { requestDeleteTask } = useRequestDeleteTask(refreshTasks, TODOS_URL);
  const { requestUpdateTask } = useRequestUpdateTask(refreshTasks, TODOS_URL);
  //Ввод текст для добавления новой задачи
  const handleInput = (event) => {
    event.preventDefault();
    inputValue
      ? requestAddNewTask(inputValue)
      : alert("Please enter a new todo");
    setInputValue("");
  };
  //Удаление и обновления задач по кнопкам из компонентов
  const deleteTask = (taskId) => requestDeleteTask(taskId);
  const updateTask = (taskTitle, taskId) =>
    requestUpdateTask(taskTitle, taskId);
  console.log(`fulltodolist`, fullTodosList);

  //изначальное формирование массива для вывода данных при загрузке страницы и при изменении оригинального todo листа
  useEffect(() => {
    setSortedArray(fullTodosList);
  }, [fullTodosList]);
  //отслеживание отложенного запроса и вывод данных по фильтру
  useEffect(() => {
    setSortedArray(
      fullTodosList.filter((task) =>
        task.title.includes(debounceQuery.toLocaleLowerCase())
      )
    );
  }, [debounceQuery]);

  //функция отложенного запроса из lodash
  const debouncedSearch = useRef(
    debounce((query) => {
      setDebounceQuery(query);
    }, 1000)
  ).current;

  // Сортировка
  const sortAtoZ = () =>
    setSortedArray(
      fullTodosList.sort((a, b) => a.title.localeCompare(b.title))
    );
  // Отложенный поиск
  const handleSearch = ({ target }) => {
    setSearchQuery(target.value);
    debouncedSearch(target.value);
    console.log(`test`);
  };

  return (
    <div>
      <form onSubmit={handleInput}>
        <input
          className={styles.input}
          type="text"
          name="todo"
          value={inputValue}
          placeholder="Add new todo"
          onChange={({ target }) => setInputValue(target.value)}
        />

        <MdAdd className={styles.add} onClick={handleInput} />
        <input
          className={styles.search}
          type="search"
          name="query"
          placeholder="Search"
          value={searchQuery} // Привязываем значение строки поиска к состоянию
          onChange={handleSearch}
        />
        <FaSortAlphaUp onClick={sortAtoZ} />
        <MdOutlineCancel
          onClick={() => {
            setSortedArray(fullTodosList);
          }}
        />
      </form>
      <div>
        <ul>
          {sortedArray.map((task) => (
            <li key={task.id}>
              <span className={styles.taskTitle}>{task.title} </span>
              <MdEdit
                className={styles.edit}
                onClick={() => updateTask(inputValue, task.id)}
              />
              <MdDelete
                className={styles.remove}
                onClick={() => deleteTask(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
