import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './Slices/usersSlice'
import { itemsReducer } from './Slices/ItemsSlice'


export default configureStore({
    reducer: {
        users: usersReducer,
        items: itemsReducer
    }
})