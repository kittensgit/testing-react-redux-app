import React, { useState } from 'react'

const AddTodo = () => {

    const [value, setValue] = useState('')

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input
                type='text'
                placeholder='enter task'
                value={value}
                onChange={handleChangeValue}
            />
            <button>add</button>
        </div>
    )
}

export default AddTodo