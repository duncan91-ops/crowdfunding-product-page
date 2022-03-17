export const amountBackedIncrease = (value) => {
  return {
    type: "AMOUNT_BACKED_INCREASE",
    payload: value,
  };
};

export const numberBackersIncrease = (value) => {
  return {
    type: "NUMBER_BACKERS_INCREASE",
    payload: value,
  };
};

export const stockDecrease = (name) => {
  return {
    type: "STOCK_DECREASE",
    payload: name,
  };
};
