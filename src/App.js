import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Trello-Style Todo Board
      </h1>
      <Board />
    </div>
  );
}

export default App;
