import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/AuthService";

// Async thunk for fetching greeting
export const fetchGreeting = createAsyncThunk(
  "auth/fetchGreeting",
  async () => {
    const data = await authService.fetchGreetingFromAPI();
    return data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    jwt: null,
    isAuthenticated: false,
    greeting: {},
  },
  reducers: {
    setAuthInfo: (state, action) => {
      state.jwt = action.payload.jwt;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout: (state) => {
      state.jwt = null;
      state.isAuthenticated = false;
      state.greeting = {};
    },
  },extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting.email = action.payload.email;
        state.greeting.picture = action.payload.picture;
      })
      .addCase(fetchGreeting.pending, (state) => {
        // Handle loading state, e.g., state.loading = true;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.error = action.error.message;
      })}
});

export const { setAuthInfo, logout } = authSlice.actions;

export default authSlice.reducer;
