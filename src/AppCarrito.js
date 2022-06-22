import { useReducer } from 'react';
import { appContext } from './context';
import { reducer } from './reducer';
import { AppCarritoRouter } from './routes/AppCarritoRouter';

export const AppCarrito = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const carItems = [];
  return (
    <appContext.Provider value={{ state, dispatch, carItems }}>
      <AppCarritoRouter />
    </appContext.Provider>
  );
};
