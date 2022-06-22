export const getTotal = (list) => {
  let totalCard = list.map((item) => {
    let total = item.quantity * item.preci;

    return total;
  });
  return (
    totalCard.length !== 0 &&
    totalCard.reduce((acc, item) => {
      return (acc = acc + item);
    })
  );
};
