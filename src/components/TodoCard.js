import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
// import { updateTodo, deleteTodo } from "../services/api";

const TodoCard = ({ todo, index, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.todo);
  const [loadingStates, setLoadingStates] = useState({});

  const setLoading = (todoId, key, value) => {
    setLoadingStates((prev) => ({
      ...prev,
      [todoId]: { ...prev[todoId], [key]: value },
    }));
  };

  const handleUpdate = async () => {
    setLoading(todo.id, "isEditing", true);

    // const updatedTodo = await updateTodo(todo.id, { todo: newTitle });
    // setTodos((prev) => prev.map((t) => (t.id === todo.id ? updatedTodo : t)));

    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, todo: newTitle } : t))
    );
    setEditing(false);
    setLoading(todo.id, "isEditing", false);
  };

  const handleDelete = async () => {
    setLoading(todo.id, "isDeleting", true);

    // await deleteTodo(todo.id);
    // setTodos((prev) => prev.filter((t) => t.id !== todo.id));

    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    setLoading(todo.id, "isDeleting", false);
  };

  return (
    <Draggable draggableId={todo?.id.toString()} index={index} key={todo?.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 bg-blue-200 rounded shadow-md mb-2 flex justify-between"
        >
          {editing ? (
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-grow p-2"
            />
          ) : (
            <span>{todo.todo}</span>
          )}
          <div className="flex items-center gap-2">
            {editing ? (
              <button onClick={handleUpdate} className="ml-2 text-green-500">
                {loadingStates[todo.id]?.isEditing ? "Saving..." : "Save"}
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="ml-2 text-blue-500"
              >
                Edit
              </button>
            )}
            <button onClick={handleDelete} className="ml-2 text-red-500">
              {loadingStates[todo.id]?.isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
