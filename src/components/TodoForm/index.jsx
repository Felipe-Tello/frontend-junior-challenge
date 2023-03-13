import { useDispatch, useSelector } from "react-redux";
import { createToDo } from "../../redux/reducer";
import "./styles.css";

const TodoForm = () => {

    const dispatch = useDispatch();
    const toDos = useSelector((state) => state.content.todos);

    const submitToDo = (e) => {
        e.preventDefault();
        const input = e.target.elements[0];
        if (input.value.trim() !== "") {
            const newId = toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 6;
            dispatch(
                createToDo({ label: input.value, checked: false, id: newId })
            );
            input.value = "";
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            submitToDo(e);
        }
    };

    return (
        <div className="todo-form">
            <form onSubmit={submitToDo}>
                <div className="form-group">
                    <input type="text" placeholder="Enter new to do" />
                    <button type="submit" onKeyDown={handleKeyPress}>ADD TO DO</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;