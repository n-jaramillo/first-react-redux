import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        clearTodos: () => {
            return { items: [] }
        },
        removeTodo: (state, action) => {
            let temp = [...state.items]
            let index = action.payload
            temp.splice(index, 1)
            return { items: temp }
        }
    }
})

export const { addTodo, clearTodos, removeTodo } = todoSlice.actions

export default todoSlice.reducer