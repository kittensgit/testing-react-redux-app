import todoReducer, { addTodo, removeTodo } from '../todoSlice'

describe('todoSlice', () => {
    it('should default state when passed an empty action', () => {
        const result = todoReducer(undefined, { type: '' })

        expect(result).toEqual([])
    })
    it('should add new todo item with "addTodo" action', () => {
        const action = { type: addTodo.type, payload: 'Redux' }

        const result = todoReducer([], action)

        expect(result[0].title).toBe('Redux')
    })
})