import { useContext } from 'react';
import { appContext } from '../context';

export const CardCarrito = ({
  id,
  name,
  preci,
  description,
  image,
  brand,
  model,
  quantity,
}) => {
  const { dispatch } = useContext(appContext);

  const handleRemoveProduct = () => {
    dispatch({ type: 'remove', payload: id });
  };
  const addCounter = () => {
    dispatch({ type: 'addcounter', payload: id });
  };
  const removeCounter = () => {
    dispatch({ type: 'removecounter', payload: id });
  };
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 mb-5 border-2 border-black-100 shadow-md">
      <div className="producto">
        <h3 className="text-lg font-bold ml-2">PRODUCTO</h3>
        <div className="producto__info flex">
          <img src={image} alt={name} className="h-28 w-28" />
          <div className="ml-2">
            <h6>{name}</h6>
            <small className="text-gray-300">{brand}</small>
          </div>
        </div>
      </div>
      <div className="precio-unitario">
        <h3 className="text-lg font-bold ml-2">PRECIO</h3>
        <h5 className="text-center">{preci}</h5>
      </div>
      <div className="cantidad">
        <h3 className="text-lg font-bold ml-2">CANTIDAD</h3>
        <div className="cantidad__desing text-center">
          <span
            className="px-2.5 pb-1 rounded-full bg-green-500 text-white font-extrabold mr-2  cursor-pointer"
            onClick={addCounter}
          >
            +
          </span>
          {quantity}
          <span
            className="px-3 pb-1 rounded-full bg-green-500 text-white font-extrabold ml-2  cursor-pointer"
            onClick={removeCounter}
          >
            -
          </span>
        </div>
      </div>
      <div className="precio-total">
        <h3 className="text-lg font-bold ml-2">PRECIO TOTAL</h3>
        <h5 className="text-center">{(preci * quantity).toFixed(3)}</h5>
      </div>
      <div className="eliminar-pedido">
        <h3 className="text-lg font-bold ml-2">ELIMINAR</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-trash3-fill mx-auto text-green-500 cursor-pointer"
          viewBox="0 0 16 16"
          onClick={handleRemoveProduct}
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg>
      </div>
    </div>
  );
};
