import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Lane from "./Lane";
import TodoForm from "./TodoForm";
import { fetchTodos, updateTodo } from "../services/api";
import Loader from "./Loader/Loader";

const Board = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetchTodos().then(setTodos);
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];

      // Find and remove the dragged todo from the source lane
      const movedTodoIndex = updatedTodos.findIndex(
        (todo) => todo.id.toString() === draggableId
      );
      const [movedTodo] = updatedTodos.splice(movedTodoIndex, 1);

      if (!movedTodo) return prevTodos;

      // Update completed status based on the destination lane
      movedTodo.completed = destination.droppableId === "Completed";

      // Get all todos in the destination lane
      const destinationLaneTodos = updatedTodos.filter(
        (todo) => todo.completed === movedTodo.completed
      );

      // Insert the moved todo at the correct dropped position
      destinationLaneTodos.splice(destination.index, 0, movedTodo);

      // Merge back the updated list
      const finalTodos = [
        ...updatedTodos.filter(
          (todo) => todo.completed !== movedTodo.completed
        ),
        ...destinationLaneTodos,
      ];

      return finalTodos;
    });

    // Update the backend
    // await updateTodo(draggableId, {
    //   completed: destination.droppableId === "Completed",
    // });
  };

  return (
    <div className="p-8">
      <TodoForm setTodos={setTodos} />

      {loading ? (
        <div className="text-center text-lg">
          <Loader />
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex space-x-4">
            <Lane
              status="Pending"
              todos={todos.filter((t) => !t.completed)}
              setTodos={setTodos}
            />
            <Lane
              status="Completed"
              todos={todos.filter((t) => t.completed)}
              setTodos={setTodos}
            />
          </div>
        </DragDropContext>
      )}
    </div>
  );
};

export default Board;

//   const onDragEnd = async (result) => {
//     if (!result.destination) return;

//     const { source, destination, draggableId } = result;

//     setTodos((prevTodos) => {
//       const updatedTodos = [...prevTodos];

//       // Find and remove the dragged todo from the source lane
//       const movedTodoIndex = updatedTodos.findIndex(
//         (todo) => todo.id.toString() === draggableId
//       );
//       const [movedTodo] = updatedTodos.splice(movedTodoIndex, 1);

//       if (!movedTodo) return prevTodos;

//       // Update completed status based on the destination lane
//       movedTodo.completed = destination.droppableId === "Completed";

//       // Get all todos in the destination lane
//       const destinationLaneTodos = updatedTodos.filter(
//         (todo) => todo.completed === movedTodo.completed
//       );

//       // Insert the moved todo at the correct dropped position
//       destinationLaneTodos.splice(destination.index, 0, movedTodo);

//       // Merge back the updated list
//       const finalTodos = [
//         ...updatedTodos.filter(
//           (todo) => todo.completed !== movedTodo.completed
//         ),
//         ...destinationLaneTodos,
//       ];

//       return finalTodos;
//     });

//     // Update the backend
//     await updateTodo(draggableId, {
//       completed: destination.droppableId === "Completed",
//     });
//   };

//   //////////////////////////////////////////////////////////////////

// const onDragEnd = (result) => {
//   if (!result.destination) return;

//   const { source, destination, draggableId } = result;

//   setTodos((prevTodos) => {
//     const updatedTodos = [...prevTodos];

//     // Find and remove the dragged todo
//     const movedTodoIndex = updatedTodos.findIndex(
//       (todo) => todo.id.toString() === draggableId
//     );
//     const [movedTodo] = updatedTodos.splice(movedTodoIndex, 1);

//     if (!movedTodo) return prevTodos;

//     // Update completed status based on the destination lane
//     movedTodo.completed = destination.droppableId === "Completed";

//     // Insert the moved todo at the correct dropped position
//     updatedTodos.splice(destination.index, 0, movedTodo);

//     return updatedTodos;
//   });
// };

// Function to handle drag and drop logic locally

//   //////////////////////////////////////////////////////////////////
//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const { source, destination, draggableId } = result;

//     setTodos((prevTodos) => {
//       const updatedTodos = [...prevTodos];

//       // Find and remove the dragged todo
//       const movedTodoIndex = updatedTodos.findIndex(
//         (todo) => todo.id.toString() === draggableId
//       );
//       const [movedTodo] = updatedTodos.splice(movedTodoIndex, 1);

//       if (!movedTodo) return prevTodos;

//       // Update completed status based on the destination lane
//       movedTodo.completed = destination.droppableId === "Completed";

//       // Insert the moved todo at the correct dropped position
//       updatedTodos.splice(destination.index, 0, movedTodo);

//       return updatedTodos;
//     });
//   };
