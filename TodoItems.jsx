import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            TodoDate={item.dueDate}
            TodoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
