import { useState, useEffect } from "react";

export const useRequestGetTodos = (TODOS_URL) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(TODOS_URL)
      .then((rawResponse) => rawResponse.json())
      .then((response) => setTodos(response));
  });

  return { todos };
};
