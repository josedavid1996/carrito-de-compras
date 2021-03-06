import React, { useContext } from 'react';
import { CardCarrito } from '../components/CardCarrito';
import { appContext } from '../context';
import { getTotal } from '../helpers';

export const CarritoPage = () => {
  const { state } = useContext(appContext);
  const totalCard = getTotal(state);
  return (
    <>
      <h1 className="font-mont text-center text-3xl my-5 font-bold">
        Carrito de compra
      </h1>
      <div className="m-5 container mx-auto">
        {state.map((product) => {
          return <CardCarrito key={product.id} {...product} />;
        })}
        {totalCard && (
          <h5 className="text-2xl text-end font-semibold ">
            <span>Total </span>={' '}
            <span className="text-green-500">{totalCard.toFixed(3)}</span>
          </h5>
        )}
      </div>
    </>
  );
};
