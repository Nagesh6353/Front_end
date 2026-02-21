import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter(
        (user) => user.id !== action.payload
      );
    },
    updateUser: (state, action) => {
      const { id, name } = action.payload;
      const user = state.list.find((u) => u.id === id);
      if (user) {
        user.name = name;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;