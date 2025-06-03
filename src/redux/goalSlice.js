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

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await axiosInstance.get('/getGoals');
  return response.data;
});

export const addGoal = createAsyncThunk('goals/addGoal', async (goal) => {
  const response = await axiosInstance.post('/addGoal', goal);
  
  // El backend devuelve el ID insertado
  return { ...goal, id: response.data.insertedId };
});

export const deleteGoal = createAsyncThunk('goals/deleteGoal', async (id) => {
  await axiosInstance.delete('/removeGoal', { data: { id } });
  return id;
});

const goalSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        return state.filter(goal => goal.id !== action.payload);
      });
  }
});

export default goalSlice.reducer;
