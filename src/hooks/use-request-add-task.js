import { useState, useEffect } from "react";

export const useRequestAddTask = (refreshTasks, TODOS_URL) => {
  const requestAddNewTask = (taskText) => {
    fetch(TODOS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: taskText }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTasks();
      });
  };
  return { requestAddNewTask, refreshTasks };
};
