import { configureStore } from "@reduxjs/toolkit";
import cartRenducer from "./CartSlice";
const store = configureStore({
    reducer:{
        mycart : cartRenducer
    }
})
export default store;