import React from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../store/todoSlice'
import { selectTodos } from '../store/selectors'

const TodoList = () => {
    const { todos } = useSelector(selectTodos)
    const dispatch = useDispatch()

    const removeTask = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div>
            {todos.map((t) => (
                <Todo key={t.id} id={t.id} title={t.title} removeTask={removeTask} />
            )
            )}
        </div>
    )
}

export default TodoList