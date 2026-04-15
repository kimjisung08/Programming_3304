import Button from './Button.jsx'

export default function Todoadder({addTodo}) {
    //submit이면 nandleSubmit 실행
    //handleSubmit
    //Text 받아서 addTodo(Text)
    return (
        <form className="todo_form">
            <input type="text" placeholder="할 일을 입력하세요!" className="todo_input" />
            <Button type="submit" className="todo_button todo_button--add">Add</Button>
        </form>
    )
}