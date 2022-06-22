import { products, carItems } from '../data/product';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newProduct = products.find(
        (product) => product.id === action.payload,
      );

      const cardItem = carItems.find((item) => item.id === newProduct.id);
      return !cardItem
        ? carItems.push({ ...newProduct, quantity: 1 }) //preguntar
        : (cardItem.quantity = cardItem.quantity + 1);

    case 'remove':
      return carItems.filter((item) => action.payload !== item.id); //preguntar
    case 'addcounter':
      const addQuanity = carItems.find((item) => item.id === action.payload);
      return [
        ...carItems,
        { ...(addQuanity.quantity = addQuanity.quantity + 1) },
      ];
    case 'removecounter':
      const removeQuanity = carItems.find((item) => item.id === action.payload);
      if (removeQuanity.quantity === 1) return;
      return [
        ...carItems,
        { ...(removeQuanity.quantity = removeQuanity.quantity - 1) }, //preguntar
      ];
    default:
      return state;
  }
};
