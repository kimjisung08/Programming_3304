import Checkbox from "./Checkbox.jsx"
import Button from "./Button.jsx"

export default function TodoItem() {
    return (
        <li className="todo_item todo_item--complete">
            <Checkbox id="1" />
            <Button className="todo_button todo_button--edit">📝</Button>
            <Button className="todo_button todo_button--delete">❌</Button>
        </li>
    )
}