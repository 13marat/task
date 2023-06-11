import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        getItems: (state: any, action: any): any => {
            const items = action.payload
            return items
        }
    }
})



export const {getItems} = itemsSlice.actions
export const itemsReducer =  itemsSlice.reducer





