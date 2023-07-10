import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map(t => (
                <Todo key={t.id} title={t.title} />
            ))}
        </div>
    )
}

export default TodoList