import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanila(older) Redux => DON'T MUTATE STATE
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state, action) => {
      //RTK – Either mutate the existing state or return a new state
      // state.items.length = 0; // originalState = []

      return { items: [] }; //this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
