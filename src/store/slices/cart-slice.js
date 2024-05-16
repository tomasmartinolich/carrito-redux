//createslice
//inicializar el estado inicial
//slice => name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
        return state.filter(item=> item.id !== action.payload);
    },
  },
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
