import authReducers from './AuthReducers';
import getProduct from './ProductReducers';
import getCategory from './CategoryReducers';
import CartReducers from './CartReducers';
const rootReducers = {
  authReducer: authReducers,
  productReducer: getProduct,
  categoryReducer: getCategory,
  cartReducer: CartReducers,
};
export default rootReducers;
