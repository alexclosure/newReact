import styles from "./App.module.css";
import { useRequestGetTodos } from "./components/use-request-get-todos";

const App = () => {
  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
  const { todos } = useRequestGetTodos(TODOS_URL);

  return (
    <div className={styles.app}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
