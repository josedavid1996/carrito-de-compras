import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Button } from '../components';
import { getProductBy } from '../helpers';

export const ProductPage = () => {
  const { productId } = useParams();
  const product = getProductBy(productId);
  if (!product) {
    return <Navigate to="/" />;
  }
  const { name, image, description, id, preci, model, brand } = product;
  return (
    <div className="container flex  items-center my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 px-5">
        <img src={image} alt={name} />
        <div className="sm:mt-6 ml-3">
          <h2 className="text-left font-medium text-xl sm:text-2xl mb-2">
            {name}
          </h2>
          <ul className="mb-5">
            <li className="text-green-500 text-base font-medium">{brand}</li>
            <li className="text-green-500 text-base font-medium">{model}</li>
          </ul>
          <small className="text-2xl sm:text-3xl font-bold block sm:inline mr-4">
            {preci}
          </small>
          <Button text="Agregar al carrito" />
          <div>
            <h5 className="text-lg font-bold mt-4">Description</h5>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
