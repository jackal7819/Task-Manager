import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const task = action.payload;
			task.id = nanoid();
            state.push(task);
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const task = state.find((task) => task.id === id);
            if (task) {
                task.title = title;
                task.description = description;
            }
        },
        deleteTask: (state, action) => {
            const id = action.payload;
            return state.filter((task) => task.id !== id);
        },
        toggleTaskStatus: (state, action) => {
            const id = action.payload;
            const task = state.find((task) => task.id === id);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTaskStatus } =
    tasksSlice.actions;
export default tasksSlice.reducer;
