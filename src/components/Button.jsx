import React, { useContext } from 'react';
import { appContext } from '../context';
import { carItems } from '../data/product';

export const Button = ({ text, id }) => {
  const { dispatch, state } = useContext(appContext);

  const handleAddProduct = () => {
    dispatch({ type: 'add', payload: id });
    console.log(state);
  };

  return (
    <button
      className="py-2 px-3 bg-green-500 text-white mt-2 rounded-lg"
      onClick={handleAddProduct}
    >
      {text}
    </button>
  );
};
