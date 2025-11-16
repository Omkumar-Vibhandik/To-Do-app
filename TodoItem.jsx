import styles from "./TodoItem.module.css";
function TodoItem1({ TodoDate, TodoName, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className={`col-6 ${styles.boxShadow}`}>{TodoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-btn"
          onClick={() => onDeleteClick(TodoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem1;
