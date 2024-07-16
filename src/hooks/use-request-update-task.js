import { useState, useEffect } from "react";

export const useRequestUpdateTask = (refreshTasks, TODOS_URL) => {
  const [isLoading, setLoading] = useState(false);

  const requestUpdateTask = (taskTitle, taskId) => {
    console.log(`taskTitle:  ${taskTitle}  taskId:  ${taskId}  `);
    fetch(`${TODOS_URL}/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8 " },
      body: JSON.stringify({ title: taskTitle, id: taskId }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setLoading(false);
        refreshTasks();
      });
  };
  return { requestUpdateTask };
};
