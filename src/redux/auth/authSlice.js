import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './operations-auth';

const initialState = {
  user: { username: null, email: null },
  token: null,
  isLogin: false,
  isUpdating: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { username: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isUpdating = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogin = true;
      state.isUpdating = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isUpdating = false;
    },
  },
});

export const authReducer = authSlice.reducer;
