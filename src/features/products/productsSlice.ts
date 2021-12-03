import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';
import { RootState } from '../../store';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await getProducts();
})

const productsSlice = createSlice({
    name:'products',
    initialState:{status:'idle', products:[], error:null},
    reducers:{},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "fetched";                
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "error";
                console.log(action);
            });
    }
})

export default productsSlice.reducer

export const selectProducts = (store:RootState) => store.products.products;