import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalAmount = state.totalAmount + (existingItem.card.info.price || existingItem.card.info.defaultPrice);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalAmount = state.totalAmount + (action.payload.card.info.price || action.payload.card.info.defaultPrice);
      }
      
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.card.info.id !== action.payload
        );
      }
      state.totalAmount = state.totalAmount - (existingItem.card.info.price || existingItem.card.info.defaultPrice);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, clearCart, updateTotalAmount, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
