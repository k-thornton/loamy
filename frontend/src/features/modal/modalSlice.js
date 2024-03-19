// features/modal/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isVisible: false,
    content: "",
    title: "",
    componentId: null,
  },
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.content = action.payload.content;
      state.title = action.payload.title;
      state.componentId = action.payload.componentId;
    },
    hideModal: (state) => {
      state.isVisible = false;
      state.content = "";
      state.title = "";

      state.componentId = null; // Store the component identifier
    },
  },
});

// Export actions and reducer
export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
