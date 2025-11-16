import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Component/WelcomeMsg";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container text-center overlay">
      {/* Adding heading component */}
      <AppName />

      <div className="container ">
        {/* Adding Todo input component */}
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
