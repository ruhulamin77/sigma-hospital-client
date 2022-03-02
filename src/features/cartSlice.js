import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: parseInt(action.payload),


        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: parseInt(action.payload) };
        state.cartItems.push(tempProductItem);
      }
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
    , getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { salePrice, cartQuantity } = cartItem;
          const itemTotal = salePrice * parseInt(action.payload);

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      /* localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); */
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;