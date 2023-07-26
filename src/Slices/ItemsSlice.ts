import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import { InitialProductsInterface, ProductsType } from '../types/Types';

export const itemsSlice = createSlice<InitialProductsInterface, SliceCaseReducers<InitialProductsInterface>>({
  name: 'items',
  initialState: {
    loading: false,
    initialProducts: [],
  },
  reducers: {
    setItems: (state: InitialProductsInterface, action: PayloadAction<ProductsType[]>): InitialProductsInterface => {
      return { ...state, initialProducts: action.payload };
    },
    setProductsLoading: (state: InitialProductsInterface, action: PayloadAction<boolean>): InitialProductsInterface => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setItems, setProductsLoading } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
