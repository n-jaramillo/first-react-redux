import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, clearTodos, removeTodo } from "./features/todoSlice"

function Todo() {
    const items = useSelector((state) => state.todo.items)

    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const todoSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    const todoItems = items.map((item, index) =>
        <li key={index} style={{ paddingBottom: "15px" }}>
            {item}
            <span style={{ marginLeft: "10px" }}>
                <button onClick={() => dispatch(removeTodo(index))}>
                    x
                </button>
            </span>
        </li>
    )

    return (
        <div>
            <h1>
                Todo List
            </h1>
            <form onSubmit={(e) => todoSubmit(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
            <button onClick={() => dispatch(clearTodos())}>
                Clear Todos
            </button>
            <ul style={{ listStyleType: "none" }}>
                {todoItems}
            </ul>
        </div>
    )
}

export default Todo