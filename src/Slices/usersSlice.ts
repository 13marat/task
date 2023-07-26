import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import { InitialUsersInterface, UsersType } from '../types/Types';

export const usersSlice = createSlice<InitialUsersInterface, SliceCaseReducers<InitialUsersInterface>>({
  name: 'users',
  initialState: {
    loading: false,
    initialUsers: [],
  },
  reducers: {
    setUsers: (state: InitialUsersInterface, action: PayloadAction<UsersType[]>): InitialUsersInterface => {
      return { ...state, initialUsers: action.payload };
    },
    setUsersLoading: (state: InitialUsersInterface, action: PayloadAction<boolean>): InitialUsersInterface => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setUsers, setUsersLoading } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
