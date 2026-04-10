export default function Checkbox(props) {
    const { id, ...rest } = props;
    return (
        <>
            <input type="checkbox" id={`chk-${id}`} className="todo_check" />
            <label htmlFor={`chk-${id}`} className="todo_label">think</label>
        </>
    )
}