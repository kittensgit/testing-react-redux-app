import React from 'react'

const Todo = ({ id, title, removeTask, completed, toggleTask }) => {
    return (
        <div>
            <p onClick={() => toggleTask(id)} className={completed ? 'toggle' : ''}>{title}</p>
            <button onClick={() => removeTask(id)}>delete</button>
        </div>
    )
}

export default Todo