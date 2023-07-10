import React from 'react'

const Todo = ({ title }) => {
    return (
        <div>
            {title}
            <button>delete</button>
        </div>
    )
}

export default Todo