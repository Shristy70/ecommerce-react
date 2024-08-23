import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, actions) => {
      let data = state.cart.filter((item) => item.id == actions.payload);
      if (data.length>=1) {
        alert("add item !!");
      } else {
        alert("already  added food");
        state.cart.push(actions.payload);
      }
    },
    cartreDel:(state, actions) => {
      state.cart = state.cart.filter((key) =>key.id!= actions.payload);
    },
    addqnty:(state, actions) => {
      for (var i = 0; i<state.cart.length; i++) {
        if (state.cart[i].id==actions.payload) {
          state.cart[i].qnty += 1;
        }
      }
    },
    DelQnty: (state, actions) => {
      for (var i = 0; i<state.cart.length; i++) {
        if (state.cart[i].id == actions.payload) {
          if (state.cart[i].qnty<=1) {
            alert("quenty is no less then 1");
          } else {
            state.cart[i].qnty-= 1;
          }
        }
      }
    }
  }
})
export default Cartslice.reducer;
export const { addtocart, cartreDel, addqnty, DelQnty } = Cartslice.actions;
