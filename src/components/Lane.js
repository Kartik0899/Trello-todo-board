import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

const Lane = ({ status, todos, setTodos }) => {
  return (
    <div className="w-1/2 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">{status}</h2>
      <Droppable droppableId={status} direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[300px] flex flex-col bg-white p-2 gap-2 rounded shadow-md"
          >
            {todos.map((todo, index) => (
              <TodoCard
                key={todo?.id}
                todo={todo}
                index={index}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Lane;
