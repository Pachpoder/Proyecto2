import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000';
const API_KEY = '12345-mi-apikey';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_KEY,
    'Content-Type': 'application/json'
  }
});

// Thunks

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axiosInstance.get('/getTasks');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  await axiosInstance.post('/addTask', task);
  return task;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await axiosInstance.delete('/removeTask', { data: { id } });
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter(task => task.id !== action.payload);
      });
  }
});

export default taskSlice.reducer;
