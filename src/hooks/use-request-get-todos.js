import { useState, useEffect } from "react";

export const useRequestGetTasks = (refreshTasks, TODOS_URL, refreshFlag) => {
  const [fullTodosList, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(TODOS_URL)
      .then((rawResponse) => rawResponse.json())
      .then((response) => setTasks(response))
      .finally(() => {});
  }, [refreshFlag]);

  return { isLoading, fullTodosList };
};
