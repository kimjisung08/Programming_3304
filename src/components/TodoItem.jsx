import Checkbox from "./Checkbox.jsx"
import Button from "./Button.jsx"

export default function TodoItem( {todo} ) {
    return (
        // todo.isCompleted가 true면 todo_item--complete 클래스 추가, 아니면 추가 X
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <Checkbox id={todo.id}>{todo.text}</Checkbox>
            <Button className="todo_button todo_button--edit">📝</Button>
            <Button className="todo_button todo_button--delete">❌</Button>
        </li>
    )
}