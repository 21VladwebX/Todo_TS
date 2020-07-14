import React, { useState } from 'react'

interface TodoForm {
    addTodo(title: string): void
}

export const Todo: React.FC<TodoForm> = ({ addTodo }) => {
    const [title, setTitle] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onKeyPress = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            addTodo(title);
            setTitle('');
        }
    }

    const titleProps = {
        value: title,
        onChange,
        id: "title",
        onKeyPress,
        placeholder: "Enter todo"
    }

    return (
        <div className="input-field mt2">
            <input {...titleProps} />
            <label htmlFor="title" className='active'>Enter todo</label>
        </div>
    )
}

export default Todo;
