import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../context';
import { carItems } from '../data/product';

export const NavLink = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { state } = useContext(appContext);

  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };
  const NumberCard = () => {
    return (
      <span className="flex justify-center items-center absolute -top-2 left-3 w-5 h-5 bg-white text-green-500 rounded-full text-xs">
        {state?.length}
      </span>
    );
  };

  return (
    <div className="bg-green-500 text-white">
      <nav className="font-mont container flex justify-between py-2 px-4 md:px-0 relative">
        <Link to="inicio">
          <span className="font-extrabold text-3xl ">Shopper</span>
        </Link>
        <ul
          className={`items-center flex-col fixed right-0  bg-green-500 w-60 h-60 pt-11 md:flex  md:static md:w-auto md:h-auto md:pt-0 md:flex-row  ${
            activeMenu ? 'flex' : 'hidden'
          } animate__animated animate__fadeIn`}
        >
          <li className="mb-4 md:mb-0">
            <Link to="inicio" className="md:mr-4 font-semibold">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="carrito" className="font-semibold relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <NumberCard />
            </Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-list text-white z-10 md:hidden cursor-pointer"
          viewBox="0 0 16 16"
          onClick={handleClick}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </nav>
    </div>
  );
};
