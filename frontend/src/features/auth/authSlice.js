import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    jwt: null,
    isAuthenticated: false,
  },
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
