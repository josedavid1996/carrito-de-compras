import { products, carItems } from '../data/product';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newProduct = products.find(
        (product) => product.id === action.payload,
      );

      const cardItem = state.find((item) => item.id === newProduct.id);
      return cardItem
        ? state.map((item) =>
            item.id === newProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state, { ...newProduct, quantity: 1 }];

    // ? carItems.push({ ...newProduct, quantity: 1 }) //preguntar
    // : (cardItem.quantity = cardItem.quantity + 1);

    case 'remove':
      return state.filter((item) => action.payload !== item.id); //preguntar
    case 'addcounter':
      const addQuanity = state.find((item) => item.id === action.payload);
      return state.map((item) =>
        item.id === addQuanity.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case 'removecounter':
      const removeQuanity = state.find((item) => item.id === action.payload);
      if (removeQuanity.quantity === 1) {
        return state.map((item) =>
          item.id === removeQuanity.id ? { ...item, quantity: 1 } : item,
        );
      }
      return state.map((item) =>
        item.id === removeQuanity.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    default:
      return state;
  }
};
