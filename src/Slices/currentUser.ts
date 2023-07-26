import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UsersType } from '../types/Types';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {},
  reducers: {
    setCurrentUser: (_, action: PayloadAction<UsersType>): UsersType => action.payload,
    deleteCurrentUser: () => {
      return {};
    },
  },
});
export const { setCurrentUser, deleteCurrentUser } = currentUserSlice.actions;
export const currentReducer = currentUserSlice.reducer;
