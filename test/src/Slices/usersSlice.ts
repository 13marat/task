import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersType } from "../types/Types";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        error: false,
        initialUsers: []
    },
    reducers: {
        setUsers: (state: any, action: PayloadAction<UsersType[]>): any => {
            return {...state, initialUsers: action.payload}
        },
        setUsersLoading: (state: any, action: PayloadAction<boolean>): any => {
            return {...state, loading: action.payload}
        },
        setUsersError: (state: any, action: PayloadAction<boolean>): any =>{
            return {...state, error: action.payload}
        }
    }
})

export const {setUsers, setUsersLoading, setUsersError} = usersSlice.actions
export const usersReducer =  usersSlice.reducer