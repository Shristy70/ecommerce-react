import { configureStore } from "@reduxjs/toolkit";
import cartRenducer from "./CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartRenducer);

const store = configureStore({
  reducer: {
    mycart: persistedReducer,
  },
});
export default store;
export const persistor = persistStore(store);
