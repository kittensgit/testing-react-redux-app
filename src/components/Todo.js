import React from 'react'

const Todo = ({ id, title, removeTask }) => {
    return (
        <div>
            {title}
            <button onClick={() => removeTask(id)}>delete</button>
        </div>
    )
}

export default Todo