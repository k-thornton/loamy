import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jwt: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, action) => {
      state.jwt = action.payload.jwt;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout: (state) => {
      state.jwt = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthInfo, logout } = authSlice.actions;

export default authSlice.reducer;
