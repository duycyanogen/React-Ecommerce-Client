import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
     search:''
  },
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
  },
})
export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;