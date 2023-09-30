import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from '../../api/product.api';

export const fetchProductById = createAsyncThunk(
    'product/fetchByIdStatus', async (productId) => {
        const response = await productApi.getProductById(productId)
        return response.data
    }
)

const initialState = {
    productDetails: {},
    isLoading: false,
    isError: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProductById.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productDetails = action.payload
        })
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    },
})

export const productDetail = (state) => state.productDetails;

export const productReducer = productSlice.reducer;

// Later, dispatch the thunk as needed in the app
//dispatch(fetchProductById(123))

