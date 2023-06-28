import { configureStore, combineReducers } from "@reduxjs/toolkit";

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

import storage from "redux-persist/lib/storage";

import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
