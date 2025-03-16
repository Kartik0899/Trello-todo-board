import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

// Fetch todos
export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data.todos;
};

// Add a new todo
export const addTodo = async (todo) => {
  const response = await axios.post("https://dummyjson.com/todos/add", {
    todo: todo.todo,
    completed: todo.completed,
    userId: 31,
  });
  return response.data;
};

// Update a todo
export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}/${id}`, updates);
  return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const createTodo = async (todo) => {
  const response = await axios.post(API_URL + "/add", todo);
  return response.data;
};
