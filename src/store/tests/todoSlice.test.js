import todoReducer, { addTodo, removeTodo } from '../todoSlice'

describe('todoSlice', () => {
    it('should default state when passed an empty action', () => {
        const result = todoReducer(undefined, {type: ''})

        expect(result).toEqual([])
    })
})