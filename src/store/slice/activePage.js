import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
    name: "activePage",
    initialState: {
      activePage: 'listProduct'
    },
    reducers: {
        updateActivePage: (state,action) => {
          state.activePage = action.payload;
        },
    },
})
export const {updateActivePage} = activePageSlice.actions;
export default activePageSlice.reducer;