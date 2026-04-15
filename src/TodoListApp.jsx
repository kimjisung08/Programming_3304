import { useState } from 'react';
import './todolist.css'
// import TodoItemEmpty from './components/TodoItemEmpty.jsx'
// import Button from './components/Button.jsx'
// import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/Todoheader.jsx'
import TodoAdder from './components/Todoadder.jsx'
// import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor(text) {
        this.text = text;                 //할일의 내용
        this.id = Date.now();             //할일 id고유의 값 == new Date().getItem()
        this.isCompleted = false;         //할일 완료 여부
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => setTodos((todos) => [
        //기존 todos 복사
        ...todos,
        //newtodo 만들어서
        //뒤에 추가하자 
        new Todo(text)
    ]);

    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder addTodo = {addTodo}/>
            <TodoList/>           
        </div>
    )
}

export default TodoListApp;