import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    searchTerm: null,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: INITIAL_STATE,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export const { setSearchTerm } = searchSlice.actions;

export const searchTerm = (state) => state.search.searchTerm;

export const searchReducer = searchSlice.reducer;