import { getCategoryAPI } from '@/Services/PoductApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from '@/Types/Product';
import { KeyAsyncStorages, StatusRequest } from '@/Constants';
import { getDataStorage } from '@/Functions/AsyncStorageFunction';
import { refreshAccessToken } from './AuthReducers';

import { refreshAccToken } from '@/Services/AuthenticatorApi';

export const fetchCategorysAsync = createAsyncThunk(
  'getCategory',
  // cho phep truyen vao 1 TypeAcction ""
  async (payload: any, { rejectWithValue }) => {
    const response: any = await getCategoryAPI(payload.accessToken);
    const { data, status, ok } = response;
    console.log('getAccount response', response);
    if (ok && status === 200) {
      console.log('listAccount', data);
      // console.log('lisCategoryURL', data.items.image);
      return data;
    }
    if (data.message === 'token Expired') {
      const test: any = await refreshAccToken(payload.refreshToken);
      console.log('listAccount het han qua test', test);
      // const { data } = test
      console.log('test.data.accessToken', test.data.accessToken)
      const accessToken = test.data.accessToken
      const response: any = await getCategoryAPI(accessToken);
      console.log('response test.data.accessToken listAccount', response.data)
      return response.data;
    }
    else {
      console.log('response getCategory failed', response);
      return rejectWithValue(data);
    }
  },
);
type CategoryState = {
  category: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
const initialCategoryState: CategoryState = {
  category: [],
  status: 'idle',
  error: null,
};

export const categorySlice = createSlice({
  name: 'product',
  initialState: initialCategoryState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchCategorysAsync.pending,
      (currentState: CategoryState) => {
        currentState.status = 'loading';
      },
    );
    builder.addCase(
      fetchCategorysAsync.fulfilled,
      (currentState: CategoryState, action: any) => {
        currentState.status = 'succeeded';
        currentState.category = action.payload;
      },
    );
    builder.addCase(
      fetchCategorysAsync.rejected,
      (currentState: any, action: any) => {
        currentState.status = 'failed';
        currentState.error = action.error.message || null;
      },
    );
  },
});
export default categorySlice.reducer;
