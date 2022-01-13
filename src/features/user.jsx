import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  titleDescription: "",
  title: "",
  description: "",
  currentCompany: "",
  describYorself: "",
  phoneNumber: "",
  image: "",
};

export const userSlices = createSlice({
  name: "user",
  initialState: {
    value: initialState,
  },
  reducers: {
    setUser: (state, action) => {
      
      state.value = action.payload;
    },
    deleteUser: (state) => {
      state.value = {};
    },
  },
});

export const { setUser, deleteUser } = userSlices.actions;
export default userSlices.reducer;
