import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
