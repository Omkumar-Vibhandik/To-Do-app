import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter text here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-btn"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
