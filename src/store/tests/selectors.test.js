import { selectTodos } from '../selectors'

describe('redux selectors', () => {
    it('should todos from state objet', () => {
        const todos = [{ id: 1, title: 'hello' }]

        const result = selectTodos({ todos: todos })

        expect(result).toEqual(todos)
    })
})