import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginSignUpApi } from "../../api/loginSignUp.api";

export const fetchNewUser = createAsyncThunk(
  "signup/getNewUserDetail",
  async (newUserDetail) => {
    const response = await loginSignUpApi.signup(
      newUserDetail.name,
      newUserDetail.email,
      newUserDetail.password,
      newUserDetail.passwordConfirm
    );
    console.log(response, "response");
    return response.data;
  }
);

const initialState = {
  user: "",
  isLoading: false,
  isError: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNewUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
      if (!action.payload) state.isError = true;
    });
    builder.addCase(fetchNewUser.rejected, (state, action) => {
      console.log("rejected");
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const user = (state) => state.user;

export const signupReducer = signupSlice.reducer;
