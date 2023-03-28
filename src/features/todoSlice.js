import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: () => {

        },
        clearTodos: () => {

        },
        removeTodo: () => {

        }
    }
})

export const { addTodo, clearTodos, removeTodo } = todoSlice.actions

export default todoSlice.reducer