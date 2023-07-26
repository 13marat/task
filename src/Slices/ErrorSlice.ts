import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {
    setError: (_, action: PayloadAction<string>): string => action.payload,
  },
});

export const { setError } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
