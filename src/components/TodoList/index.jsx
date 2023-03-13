import TodoListItem from "components/TodoListItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readToDos, deleteToDo, updateToDo} from "../../redux/reducer";
import "./styles.css";

const TodoList = () => {

    const toDos = useSelector(state => state.content.todos);
    // const error = useSelector(state => state.content.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readToDos());
    }, [dispatch]);

    const handleDelete = (todoId) => {
        dispatch(deleteToDo({ id: todoId }))
    };

    const toggleCheck = (todoId) => {
        dispatch(updateToDo({ id: todoId }))
    };

    return (
        <div className="todo-list">
            <span className="todo-list-title">Things to do:</span>
            <div className="todo-list-content">
                {/* Fix an ability to render todos */}
                {toDos.length > 0 ?
                    toDos.map((td, index) => (
                        <TodoListItem key={index} id={td.id} label={td.label} checked={td.checked} onDelete={() => handleDelete(td.id)} onCheck={() => toggleCheck(td.id)}></TodoListItem>
                    ))
                    :
                    <div className="no-todos">It seems that you&apos;re absolutely free today! maybe you have time to see my <a target="_blank" href="http://34.125.169.145/">PORTFOLIO</a> :0 !</div>
                }
            </div>
        </div>
    );
};

export default TodoList;
