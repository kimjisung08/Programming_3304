import { useState } from 'react'
import Button from './Button.jsx'

export default function Todoadder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');
    //submit이면 nandleSubmit 실행
    //handleSubmit
    //Text 받아서 addTodo(Text)

    const handleSubmit = (event) => {
        event.preventDefault();          //submit 기본 동작 막자

        if(!inputTodo) return;           //빈칸이면 그대로 return

        addTodo(inputTodo.trim());       //todos에 todo 추가하자
        setInputTodo('');                //input text 빈칸으로 하자
    }

    return (
        <form className="todo_form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="할 일을 입력하세요!"
                className="todo_input"
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type="submit" className="todo_button todo_button--add">Add</Button>
        </form>
    )
}