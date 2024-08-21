import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, description, isDone } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.description = description;
                task.isDone = isDone;
            }
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
