import { combineReducers } from "@reduxjs/toolkit";

import { testReducer } from "./test/test.reducer";

export const rootReducer = combineReducers({
    test: testReducer
})