import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, nom, prix } = action.payload;

      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalprix = existingItem.quantity * prix;
      } else {
        state.items.push({
          id,
          nom,
          prix,
          quantity: 1,
          totalprix: prix,
        });
      }

      state.total = state.items.reduce((total, item) => total + item.totalprix, 0);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;

      state.items = state.items.filter(item => item.id !== itemIdToRemove);

      state.total = state.items.reduce((total, item) => total + item.totalprix, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
