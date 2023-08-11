export type Category = {id: string; name: string; image: Image};
export type Image = {
  url: string;
};
// export type ResizedUrl = {url: string};
export type Product = {
  id: string;
  name: string;
  productRepresent: ProductRepresent;
};
export type ProductRepresent = {image: ImageProduct; initPrice: InitPrice};
export type ImageProduct = {url: string};
export type InitPrice = {value: number; currency: string};
export type Menu = {
  key: string;
  text: string;
  name: string;
  onPress: () => void;
};
export type AddProductToCartApi = {
  productId: string;
  // string[] -> kieu du lieu cua item trong mang
  imageDesignIds: string[]; // imageDesignIds co kieu du lieu la 1 mang array 'string', la array co nhieu item, moi item la 1 string
  sizeId: string;
  colorId: string;
  quantity: number;
};
export type ItemProduct = {
  item: Product;
  index: number;
};
export type ItemProductInCartType = {};
