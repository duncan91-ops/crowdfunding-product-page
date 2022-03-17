import { useReducer, createContext, useContext } from "react";

const initialState = {
  amountBacked: 89914,
  numberBackers: 5007,
  products: [
    {
      name: "Bamboo Stand",
      details: "Pledge $25 or more",
      reward:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      stock: 101,
    },
    {
      name: "Black Edition Stand",
      details: "Pledge $75 or more",
      reward:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 64,
    },
    {
      name: "Mahogany Special Edition",
      details: "Pledge $200 or more",
      reward:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 0,
    },
  ],
};

const reducer = (state, action) => {
  if (action.type === "NUMBER_BACKERS_INCREASE") {
    return { ...state, numberBackers: (state.numberBackers += action.payload) };
  } else if (action.type === "AMOUNT_BACKED_INCREASE") {
    return { ...state, amountBacked: (state.amountBacked += action.payload) };
  } else if (action.type === "STOCK_DECREASE") {
    const products = state.products.map(({ name, stock }) => {
      if (name === action.payload.name) {
        stock -= 1;
      }
      return { name, stock };
    });
    return { ...state, products };
  } else {
    return state;
  }
};

const BackersContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BackersContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      {children}
    </BackersContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(BackersContext);
};
