import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductInCart} from '@/Types/Cart';
export const addProductToCartAsync = createAsyncThunk(
  'addProductToCart',
  // cho phep truyen vao 1 TypeAcction ""
  async () => {
    // const response: any = await addProductToCartApi(
    //   payload.item,
    //   payload.accessToken,
    // );
    // const {data, status, ok} = response;
    // console.log('addProductToCartApi', payload.item);
    // if (ok && status === StatusRequest.POST) {
    //   console.log('addProductToCartApi fulfilled', data);
    //   return data;
    // } else {
    //   console.log('addProductToCartApi rejected', data);
    //   return rejectWithValue(data);
    // }
  },
);
type CartState = {
  listProductInCart: ProductInCart[];
};
const initialCartState: CartState = {
  listProductInCart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      console.log(
        'state.listProductInCart:',
        JSON.stringify(state.listProductInCart),
      );
      console.log('state.listProductInCart:', action.payload.productRepresent);
      const date = new Date();
      let productInCartObject = {
        id: date.getTime().toString() + state.listProductInCart.length,
        name: action.payload.name,
        productRepresent: action.payload.productRepresent,
        color: '',
        size: '',
      };
      state.listProductInCart = [
        ...state.listProductInCart,
        productInCartObject,
      ];
    },
  },
});
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
