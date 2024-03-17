// features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
    content: '',
    title: ''
  },
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.content = action.payload.content;
      state.title = action.payload.title? action.payload.title : "Alert";
    },
    hideModal: (state) => {
      state.isVisible = false;
      state.content = '';
      state.title = '';
    },
  },
});

// Export actions and reducer
export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
