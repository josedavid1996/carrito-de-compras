import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrementar = () => {
    setCounter(counter + 1);
  };
  const handleDecrementar = () => {
    setCounter(counter - 1);
  };

  return [counter, handleIncrementar, handleDecrementar];
};
