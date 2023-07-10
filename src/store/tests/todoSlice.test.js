import todoReducer, { addTodo, removeTodo, toggleComplete } from '../todoSlice'

describe('todoSlice', () => {
    it('should default state when passed an empty action', () => {
        const result = todoReducer(undefined, { type: '' })

        expect(result).toEqual([])
    })
    it('should add new todo item with "addTodo" action', () => {
        const action = { type: addTodo.type, payload: 'Redux' }

        const result = todoReducer([], action)

        expect(result[0].title).toBe('Redux') // нулевая тудушка(единственная)
        expect(result[0].completed).toBe(false)
    })
    it('should toggle todo completed status with "toggleCompleted" action', () => {
        const todos = [{id: 223, title: 'react', completed: false}]
        const action = {type: toggleComplete.type, payload: 223}

        const result = todoReducer(todos, action)

        expect(result[0].completed).toBe(true)
    })
})