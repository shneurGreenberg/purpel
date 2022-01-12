import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const colorSlices = createSlice({
  name: "color",
  initialState: {
    value: initialState,
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = colorSlices.actions;
export default colorSlices.reducer;
