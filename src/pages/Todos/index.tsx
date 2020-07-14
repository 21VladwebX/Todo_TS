import React, { useEffect, useState } from "react";
import Todo from "../../components/Todo";
import TodoList from "../../components/TodoList";
import { ITodo } from "../../interfaces/interface";

const TodosPage: React.FC = () => {
    const [todos, addTodo] = useState<ITodo[]>([])

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        addTodo(saved);
    },[]);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const addHandler = (title: string): void => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        };

        addTodo(prevState => [newTodo, ...prevState]);
    }
    const onTodoCompleted = (id: number) =>
        addTodo((prevState) =>
            prevState.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
        )

    const onDeleteTodo = (id: number) => {
        const shouldDelete = window.confirm('You sure that you want to delete this todo?');
        shouldDelete && addTodo(prevState => prevState.filter(item => item.id !== id));
    }

    const todoListProps = {
        todos,
        onDeleteTodo,
        onTodoCompleted
    }

    return(
        <>
            <h1 className="center">Todos page</h1>
            <Todo addTodo={addHandler}/>
            <TodoList {...todoListProps} />
        </>
    )
}

export default TodosPage;
