import React from "react";
import "./styles.css";

const TodoListItem = ({ onCheck, checked, onDelete, label, id }) => (
    <div className="todo-list-item">
        <div tabIndex="0" role="checkbox" aria-checked className="todo-list-item-content">
            <input tabIndex="-1" id={id} type="checkbox" checked={checked} onChange={onCheck} />
            <label htmlFor={id} className={checked ? "todo-list-item-checked" : ""}>{label}</label>
        </div>
        <button type="button" className="todo-list-item-delete" onClick={onDelete}>x</button>
    </div>
);

export default TodoListItem;
