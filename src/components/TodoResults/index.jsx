import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const TodoResults = () => {

  const toDos = useSelector(state => state.content.todos);
  const completedToDos = (toDos && toDos.filter(todo => todo.checked))
  
  return <div className="todo-results">Done: {toDos ? completedToDos.length: 0}</div>;
};

export default TodoResults;
