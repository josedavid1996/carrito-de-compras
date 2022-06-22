import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from '../components';
import { CarritoPage, InicioPage, ProductPage } from '../pages';

export const AppCarritoRouter = () => {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="carrito" element={<CarritoPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="inicio" element={<InicioPage />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
