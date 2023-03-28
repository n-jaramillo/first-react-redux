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
        removeTodo: () => {

        }
    }
})

export const { addTodo, clearTodos, removeTodo } = todoSlice.actions

export default todoSlice.reducer