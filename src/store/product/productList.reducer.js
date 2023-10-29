import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from '../../api/product.api';

export const fetchProductsByCategory = createAsyncThunk(
    'product/fetchByCategory', async (categoryId) => {
        const response = await productApi.getProductsByCategory(categoryId)
        console.log({response})
        return response.data
    }
)

const initialState = {
    productList: [],
    isLoading: false,
    isError: false
}

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProductsByCategory.pending, (state, action) => {
            console.log("inpen", action.payload, state)
            state.isLoading = true;
        })
        builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            console.log("inred", action.payload, state)
            state.isLoading = false;
            state.productList = action.payload
        })
        builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    },
})

export const productListData = (state) => state.productList;

export const productListReducer = productListSlice.reducer;