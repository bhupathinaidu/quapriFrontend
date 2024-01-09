import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginSignUpApi } from "../../api/loginSignUp.api";

export const fetchUser = createAsyncThunk(
  "login/getUserDetail",
  async (userDetail) => {
    const response = await loginSignUpApi.login(
      userDetail.username,
      userDetail.password
    );
    console.log(response, "res");
    return response.data;
  }
);

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      console.log(action.payload, "esfghg");
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
      if (!action.payload) state.isError = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("rejected");
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setLoginUser } = loginSlice.actions;

export const user = (state) => state.user;

export const loginReducer = loginSlice.reducer;
