import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoReducer'

const AddTodo = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    const handleAddTask = () => {
        dispatch(addTodo(value))
        setValue('')
    }

    return (
        <div>
            <input
                type='text'
                placeholder='enter task'
                value={value}
                onChange={handleChangeValue}
            />
            <button onClick={handleAddTask}>add</button>
        </div>
    )
}

export default AddTodo