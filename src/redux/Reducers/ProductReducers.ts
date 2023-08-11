import { addProductToCartApi, getProductAPI } from '@/Services/PoductApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '@/Types/Product';
import { StatusRequest } from '@/Constants';

export const fetchProductsAsync = createAsyncThunk(
  'getProduct',
  // cho phep truyen vao 1 TypeAcction "
  async (payload: any, { rejectWithValue }) => {
    const response: any = await getProductAPI(payload.accessToken);
    const { data, status, ok } = response;
    console.log('accessToken GetProduct', payload.accessToken);
    console.log('data:', data);
    console.log('data.items:', data.items);
    if (ok && status === StatusRequest.GET) {
      return data.items;
    } else {
      return rejectWithValue(data);
    }
  },
);
export const addProductToCartAsync = createAsyncThunk(
  'addProductToCart',
  // cho phep truyen vao 1 TypeAcction ""
  async (payload: any, { rejectWithValue }) => {
    const response: any = await addProductToCartApi(
      payload.item,
      payload.accessToken,
    );
    const { data, status, ok } = response;
    console.log('addProductToCartApi', payload.item);
    if (ok && status === StatusRequest.POST) {
      console.log('addProductToCartApi fulfilled', data);
      return data;
    } else {
      console.log('addProductToCartApi rejected', data);
      return rejectWithValue(data);
    }
  },
);
type ProductState = {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
const initialProductState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};
export const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchProductsAsync.pending,
      (currentState: ProductState) => {
        currentState.status = 'loading';
      },
    );
    builder.addCase(
      fetchProductsAsync.fulfilled,
      (currentState: ProductState, action: any) => {
        currentState.status = 'succeeded';
        currentState.products = action.payload;
      },
    );
    builder.addCase(
      fetchProductsAsync.rejected,
      (currentState: any, action: any) => {
        currentState.status = 'failed';
        currentState.error = action.error.message || null;
      },
    );
    builder.addCase(
      addProductToCartAsync.pending,
      (currentState: ProductState) => {
        currentState.status = 'loading';
      },
    );
    builder.addCase(
      addProductToCartAsync.fulfilled,
      (currentState: ProductState, action: any) => {
        currentState.status = 'succeeded';
        currentState.products = action.payload;
      },
    );
    builder.addCase(
      addProductToCartAsync.rejected,
      (currentState: any, action: any) => {
        currentState.status = 'failed';
        currentState.error = action.error.message || null;
      },
    );
  },
});
export default productSlice.reducer;
