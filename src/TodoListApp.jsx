import './todolist.css'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo_title">No Think, Do It!!</h1>

            <form className="todo_form">
                <input type="text" placeholder="할 일을 입력하세요!" className="todo_input" />
                <Button type="submit" className="todo_button todo_button--add">Add</Button>
            </form>

            <ul className="todo_list">
                <TodoItemEmpty/>
                <li className="todo_item todo_item--complete">
                    <Checkbox id="1"/>
                    <Button className="todo_button todo_button--edit">📝</Button>
                    <Button className="todo_button todo_button--delete">❌</Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;