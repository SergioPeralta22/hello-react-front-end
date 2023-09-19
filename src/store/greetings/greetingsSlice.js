import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/greetings/random';
const initialState = {
  greetings: 'Loading...',
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => {
      state.greetings = action.payload;
    },
  },
});

export default greetingsSlice.reducer;
