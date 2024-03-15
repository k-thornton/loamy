// features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
    content: ''
  },
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    hideModal: (state) => {
      state.isVisible = false;
      state.content = '';
    },
  },
});

// Export actions and reducer
export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
