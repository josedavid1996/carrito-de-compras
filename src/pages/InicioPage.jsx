import { CardProduct } from '../components';
import { products } from '../data/product';

export const InicioPage = () => {
  return (
    <>
      <h1 className="font-mont text-center text-3xl my-5 font-bold">Tienda</h1>

      <ul className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-3fr mb-8">
        {products.map((product) => {
          return <CardProduct key={product.id} {...product} />;
        })}
      </ul>
    </>
  );
};
