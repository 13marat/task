import { PayloadAction, SliceCaseReducers, createSlice, current } from '@reduxjs/toolkit';
import { ProductsType } from '../types/Types';

export const cartSlice = createSlice<ProductsType[], SliceCaseReducers<ProductsType[]>>({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart: (state: ProductsType[], action: PayloadAction<ProductsType>): ProductsType[] => {
      return [...state, action.payload];
    },
    updateCart: (state: ProductsType[], action: PayloadAction<ProductsType>): ProductsType[] => {
      const cart = current(state);
      const data = action.payload;
      const itemsIndex = cart.findIndex((item) => item.id === data.id);
      const start = cart.slice(0, itemsIndex);
      const end = cart.slice(itemsIndex + 1);

      return [...start, data, ...end];
    },
    removeItem: (state: ProductsType[], action: PayloadAction<ProductsType>) =>
      state.filter((item: ProductsType) => item.id !== action.payload.id),
  },
});
export const { addCart, updateCart, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
