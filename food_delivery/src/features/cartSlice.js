import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  cart: [],
  count: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.loading = false;
      state.cart.push(action.payload);
      state.count = state.cart.length;
      state.total = state.cart.reduce((acc, item) => {
        const subTotal = item.quantity * item.price;
        return acc + subTotal;
      }, 0);
    },

    deleteToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      state.count = state.cart.length;

      state.total = state.cart.reduce((acc, item) => {
        const subTotal = item.quantity * item.price;
        return acc + subTotal;
      }, 0);
    },

    changeQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
            total: action.payload.quantity * item.price,
          };
        } else {
          return item;
        }
      });
      state.total = state.cart.reduce((acc, item) => {
        const subTotal = item.quantity * item.price;
        return acc + subTotal;
      }, 0);
    },
  },
});

export const { addToCart, deleteToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
