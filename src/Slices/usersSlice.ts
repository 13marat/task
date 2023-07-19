import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersType } from "../types/Types";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        initialUsers: []
    },
    reducers: {
        setUsers: (state: any, action: PayloadAction<UsersType[]>): any => {
            return {...state, initialUsers: action.payload}
        },
        setUsersLoading: (state: any, action: PayloadAction<boolean>): any => {
            return {...state, loading: action.payload}
        }
    }
})

export const {setUsers, setUsersLoading} = usersSlice.actions
export const usersReducer =  usersSlice.reducer