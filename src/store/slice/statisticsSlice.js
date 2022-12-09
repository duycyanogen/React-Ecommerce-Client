import { createSlice } from "@reduxjs/toolkit";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    statistic: []
  },
  reducers: {
    updateStatistics: (state, action) => {
      state.statistics = action.payload;
    },
  },
})
export const { updateStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;