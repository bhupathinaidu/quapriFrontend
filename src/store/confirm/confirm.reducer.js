import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    confirmDetails: {
        name: null,
        shape: null,
        materials: null,
        paperType: null,
        quantity: null,
        cost: null,
        imgUrl: null
    }
    
}

export const confirmSlice = createSlice({
    name: 'confirm',
    initialState: INITIAL_STATE,
    reducers: {
        setConfirm: (state, action) => {
            console.log("action", action.payload)
            state.confirmDetails= action.payload
        }
    }
})

export const { setConfirm } = confirmSlice.actions;

export const confirmDetails = (state) => state.confirm.confirmDetails;

export const confirmReducer = confirmSlice.reducer;