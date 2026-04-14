import './todolist.css'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/Todoheader.jsx'
import TodoAdder from './components/Todoadder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

function TodoListApp() {
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder/>
            <TodoList/>           
        </div>
    )
}

export default TodoListApp;