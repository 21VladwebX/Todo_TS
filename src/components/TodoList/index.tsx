import React from "react";

type TodoListProps = {
    todos: any[]
    onDeleteTodo(id: number): void
    onTodoCompleted(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onDeleteTodo, onTodoCompleted}) => {
    const onDeleteClick = (e: React.MouseEvent, id: number) =>{
        e.preventDefault();
        onDeleteTodo(id)
    }
    return (
        <>
        {!!todos.length
            ? (
                <ul>
                    {todos.map(({id,completed,title})=> {
                        const classes = ['todo'];
                        completed && classes.push('completed');

                        return (
                            <li key={id} className={classes.join(' ')}>
                                <label>
                                    <input type="checkbox" checked={completed} onChange={onTodoCompleted.bind(null,id)}/>
                                    <span>{title}</span>
                                    <i className="material-icons red-text" onClick={(e) => {onDeleteClick(e,id)}}>delete</i>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            )
            : (<p className="center"> No todos yet </p>)
        }
        </>
    )
}

export default TodoList;
