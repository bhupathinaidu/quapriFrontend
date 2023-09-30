import { combineReducers } from "@reduxjs/toolkit";

import { testReducer } from "./test/test.reducer";
import { searchReducer } from "./search/search.reducer";
import { productReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
    test: testReducer,
    search: searchReducer,
    productDetails: productReducer
})