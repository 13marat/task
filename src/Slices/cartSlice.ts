import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { ProductsType } from "../types/Types";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart: (state: ProductsType[], action: PayloadAction<ProductsType>): any => [...state, action.payload],  
        updateCart: (state: ProductsType[], action: PayloadAction<ProductsType>): any => {
            const cart = current(state)
            const data = action.payload
            const itemsIndex = cart.findIndex(item => item.id === data.id)
            const start = cart.slice(0, itemsIndex)
            const end = cart.slice(itemsIndex + 1)

            return  [...start, data, ...end]
        },
        removeItem: (state: ProductsType[], action: PayloadAction<ProductsType>): any => state.filter((item: ProductsType) => item.id !== action.payload.id),
    }
})
export const {addCart, updateCart, removeItem} = cartSlice.actions
export const cartReducer =  cartSlice.reducer