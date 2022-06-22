import { Link } from 'react-router-dom';

import { Button } from './Button';

export const CardProduct = ({
  id,
  name,
  price,
  image,
  description,
  brand,
  model,
}) => {
  return (
    <div className="border-2 border-black-100 rounded-lg flex flex-col items-center shadow-xl">
      <img src={image} alt={name} className="h-70 w-full object-contain" />
      <Link to={`/product/${id}`} className="text-center  font-medium px-2">
        {name}
      </Link>
      <Button text="Agregar al carrito" id={id} />
    </div>
  );
};
