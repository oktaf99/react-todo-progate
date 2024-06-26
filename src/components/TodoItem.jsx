import React, { useContext } from "react";
import { TodoContext } from "../App";

// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

// Salin CSS yang terbaru CSS di bawah ini
const styles = {
  todoItem: {
    width: "600px",
    border: "2px solid #f4f4f4",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 20px",
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "40px",
    width: "40px",
    margin: "0",
    padding: "0",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;