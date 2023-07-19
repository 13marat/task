import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/usersSlice";
import { itemsReducer } from "./Slices/ItemsSlice";
import { currentReducer } from "./Slices/currentUser";
import { cartReducer } from "./Slices/cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { errorReducer } from "./Slices/ErrorSlice";

const rootReducer = combineReducers({
  current: currentReducer,
});


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    users: usersReducer,
    items: itemsReducer,
    cart: cartReducer,
    current: persistedReducer,
    error: errorReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;