import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        getUser: (state: any, action: any): any => {
            const user = action.payload
            return user
        }
    }
})



export const {getUser} = usersSlice.actions
export const usersReducer =  usersSlice.reducer





