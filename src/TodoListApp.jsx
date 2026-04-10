import './todolist.css'

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo_title">No Think, Do It!!</h1>

            <form className="todo_form">
                <input type="text" placeholder="할 일을 입력하세요!" className="todo_input" />
                <button type="submit" className="todo_button todo_button--add">Add</button>
            </form>

            <ul className="todo_list">
                <li className="todo__item todo__item--empty">
                    <p>할 일 없음.</p>
                </li>

                <li className="todo_item todo_item--complete">
                    <input type="checkbox" id="chk-1" className="todo_check" />
                    <label htmlFor="chk-1" className="todo_label">think</label>
                    <button className="todo_button todo_button--edit">📝</button>
                    <button className="todo_button todo_button--delete">❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;