import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const Cartslice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, actions) => {
      let data = state.cart.filter((item) => item.id === actions.payload.id);
      if (data.length >= 1) {
        message.warning("Product Already Added!!!");
      } else {
        state.cart.push(actions.payload);
        message.success("Product Added!");
      }
    },
    cartreDel: (state, actions) => {
      state.cart = state.cart.filter((key) => key.id !== actions.payload);
    },
    addqnty: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload) {
          state.cart[i].qnty += 1;
        }
      }
    },
    DelQnty: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload) {
          if (state.cart[i].qnty <= 1) {
            message.warning("Quantity cannot be less than 1");
          } else {
            state.cart[i].qnty -= 1;
          }
        }
      }
    }
  }
});

export default Cartslice.reducer;
export const { addtocart, cartreDel, addqnty, DelQnty } = Cartslice.actions;
