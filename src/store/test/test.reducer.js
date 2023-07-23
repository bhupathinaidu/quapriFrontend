import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
}

export const testSlice = createSlice({
    name: 'test',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrenUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { setCurrenUser } = testSlice.actions;

export const currentUser = (state) => state.test.currentUser;

export const testReducer = testSlice.reducer;