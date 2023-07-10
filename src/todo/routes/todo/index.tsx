import { ChangeEventHandler, FormEventHandler, useCallback, useState } from "react"

const TodoPage = () => {
    const [todos, setTodos] = useState<string[]>([])
    const [todoInput, setTodoInput] = useState('')

    const onTodoChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: { value }}) => {
        setTodoInput(value)
    }, [])

    const onAdd: FormEventHandler<HTMLFormElement> = useCallback(event => {
        event.preventDefault()

        if (todoInput.length < 1) {
            return
        }

        setTodos(prevTodos => !prevTodos.includes(todoInput) ? [...prevTodos, todoInput] : prevTodos)
        setTodoInput('')
    }, [todoInput])

    return (
        <div>
            <form onSubmit={onAdd}>
                <input placeholder="type todo" name="todo" value={todoInput} onChange={onTodoChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => <ol key={`${todo}-${index}`}>{todo}</ol>)}
            </ul>
        </div>
    )
}

export default TodoPage
