import { products } from '../data/product';

export const getProductBy = (id) => {
  return products.find((product) => product.id === id);
};
