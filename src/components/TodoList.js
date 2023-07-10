import React from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleComplete } from '../store/todoSlice'
import { selectTodos } from '../store/selectors'

const TodoList = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const removeTask = (id) => {
        dispatch(removeTodo(id))
    }

    const toggleTask = (id) => {
        dispatch(toggleComplete(id))
    }

    return (
        <div>
            {todos.map((t) => (
                <Todo key={t.id} id={t.id} title={t.title} completed={t.completed} removeTask={removeTask} toggleTask={toggleTask} />
            )
            )}
        </div>
    )
}

export default TodoList