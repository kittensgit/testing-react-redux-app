import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false
            })
        },
        removeTodo: (state, action) => {
            state = state.filter(todo => todo.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            const toggledTodo = state.find(todo=>todo.id === action.payload)
            toggledTodo.completed = !toggledTodo.completed
        }
    }
})

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer