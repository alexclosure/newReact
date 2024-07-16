export const useRequestDeleteTask = (refreshTasks, TODOS_URL) => {
  const requestDeleteTask = (taskId) => {
    fetch(`${TODOS_URL}/${taskId}`, {
      method: "DELETE",
    })
      .then((rawResponce) => rawResponce.json())
      .then((responce) => console.log(responce))
      .finally(() => refreshTasks());
  };
  return { requestDeleteTask };
};
