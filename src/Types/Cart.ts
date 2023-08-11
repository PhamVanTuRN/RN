import {ProductRepresent} from './Product';

export type ProductInCart = {
  id: string;
  name: string;
  productRepresent: ProductRepresent;
  color: string; // tu them sau
  size: string;
};
