import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;

      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * price;
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: 1,
          totalPrice: price,
        });
      }

      state.total = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;

      state.items = state.items.filter(item => item.id !== itemIdToRemove);

      state.total = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
