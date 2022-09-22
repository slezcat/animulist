import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  content:{}
  
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state,action) => {
      state.content= action.payload
      state.isModalOpen = true;
      console.log(state.content)
    },
    closeModal: (state) => {
      state.content = {}
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
