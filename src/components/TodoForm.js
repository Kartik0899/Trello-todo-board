import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTodo = () => {
    if (!title.trim()) return;
    setLoading(true);

    const newTodo = {
      id: Date.now(),
      todo: title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setLoading(false);
  };

  return (
    <div className="mb-4 flex justify-center p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-3 mr-2 w-3/4"
        placeholder="Add a new todo..."
      />
      <button
        onClick={handleAddTodo}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Todo"}
      </button>
    </div>
  );
};

export default TodoForm;
