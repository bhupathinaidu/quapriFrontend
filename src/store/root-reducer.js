import { combineReducers } from "@reduxjs/toolkit";

import { testReducer } from "./test/test.reducer";
import { searchReducer } from "./search/search.reducer";
import { productReducer } from "./product/product.reducer";
import { productListReducer } from "./product/productList.reducer";
import { confirmReducer } from "./confirm/confirm.reducer";

export const rootReducer = combineReducers({
    test: testReducer,
    search: searchReducer,
    productDetails: productReducer,
    productList: productListReducer,
    confirm: confirmReducer
})