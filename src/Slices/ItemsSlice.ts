import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../types/Types";

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        loading: false,
        error: false,
        initialProducts: []
    },
    reducers: {
        setItems: (state: any, action: PayloadAction<ProductsType[]>) : any => {
            return {...state, initialProducts: action.payload}
        },
        setProductsLoading: (state: any, action: PayloadAction<boolean>): any => {
            return {...state, loading: action.payload}
        },
        setProductsError: (state: any, action: PayloadAction<any>): any =>{
            return {...state, error: action.payload}
        }
    }
})
export const {setItems, setProductsLoading, setProductsError} = itemsSlice.actions
export const itemsReducer =  itemsSlice.reducer