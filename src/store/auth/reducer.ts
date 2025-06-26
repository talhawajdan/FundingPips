import { createSlice } from "@reduxjs/toolkit";
// import { loginSuccess, authMeSuccess } from "./extra-reducers";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: any) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.user = initialState.user;
    },
  },
  extraReducers: () => {
    // builder.addMatcher(authAPI.endpoints.login.matchFulfilled, loginSuccess);
    // builder.addMatcher(authAPI.endpoints.authMe.matchFulfilled, authMeSuccess);
  },
});

export const authActions = slice.actions;
export const authReducer = slice.reducer;
