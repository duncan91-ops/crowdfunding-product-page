import { useReducer, createContext, useContext } from "react";

const initialState = {
  amountBacked: 89914,
  numberBackers: 5007,
  target: 100000,
  rewards: [
    {
      reward: "Pledge with no reward",
      details:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    {
      reward: "Bamboo Stand",
      pledge: 25,
      details:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      stock: 101,
    },
    {
      reward: "Black Edition Stand",
      pledge: 75,
      details:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 64,
    },
    {
      reward: "Mahogany Special Edition",
      pledge: 200,
      details:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 0,
    },
  ],
};

const reducer = (state, action) => {
  if (action.type === "AMOUNT_BACKED_INCREASE") {
    const rewards = state.rewards.map((product) => {
      let { reward, stock } = product;
      if (reward === action.payload.reward) {
        stock -= 1;
      }
      return { ...product, reward, stock };
    });
    return {
      ...state,
      amountBacked: state.amountBacked + action.payload.amount,
      numberBackers: state.numberBackers + 1,
      rewards,
    };
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
