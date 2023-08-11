import { appApi } from '@/Config/ApiConfig';
import { AddProductToCartApi } from '@/Types/Product';
export const getProductAPI = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.get('/product');
};
export const getCategoryAPI = async (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });

  console.log('vao kiem tra Accesstoken', await appApi.get('/account'))
  return await appApi.get('/account')
  // appApi.get('/account');
};
export const addProductToCartApi = (
  item: AddProductToCartApi,
  accessToken: string,
) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('/cart/product', item);
};
