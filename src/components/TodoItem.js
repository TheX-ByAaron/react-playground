

export const TodoItem = (props) => {

    let style = {
        backgroundColor: props.completed? "#00ffc5" : "#dddddd",
        color: props.completed? "white" : "#444444",
        textDecoration: props.completed? "line-through" : "none"
    }

    return (
        <div style={style} className="todo-item">
            <p>{props.title}</p>
        </div>
    )
}