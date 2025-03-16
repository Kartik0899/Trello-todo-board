# 🚀 Trello-Style Todo Board
A simple Trello-style Todo Board built with React, Tailwind CSS, and react-beautiful-dnd for drag-and-drop functionality. It allows users to add, update, delete, and move tasks between Pending and Completed lanes while persisting the changes via API calls.

# 📌 Features
- ✅ Drag and drop todos between lanes using react-beautiful-dnd
- ✅ Add new todos with a controlled input form
- ✅ Edit and delete todos directly from the UI
- ✅ API integration with dummyjson.com for fetching, updating, and deleting todos
- ✅ Loader component to indicate loading state
- ✅ Clean UI built with Tailwind CSS

# 🛠️ Getting Started
1️⃣ Clone the Repository
```
git clone https://github.com/yourusername/trello-todo-board.git
cd trello-todo-board
```
2️⃣ Install Dependencies
```
npm install
```

3️⃣ Start the Development Server
```
npm start
```

# 📌 Approach Taken
- Component-Based Design: The project follows a modular approach, breaking down UI elements into reusable components (Board, Lane, TodoCard, etc.).
- State Management: useState is used to handle local UI updates before making API calls.
- Drag & Drop Handling: Implemented using react-beautiful-dnd, ensuring smooth interactions and intuitive task movements.
- Optimistic UI Updates: When a user moves a task, the UI updates immediately before sending the backend request, enhancing performance.

# 🎯 Design Decisions & Patterns
1️⃣ API Handling & State Management
- API calls are abstracted into a services/api.js file to keep network logic separate from UI components.
- Used useEffect for initial data fetching to populate the todo board on load.

2️⃣ Drag-and-Drop Logic
- The onDragEnd function updates the state before making an API request to reduce perceived lag.
- Only updates the backend if a valid destination is detected.

3️⃣ Performance Optimizations
- Minimized re-renders by only updating the specific todo that changes.
- Used key-based rendering for smooth UI transitions.
- Batch state updates to improve performance.
