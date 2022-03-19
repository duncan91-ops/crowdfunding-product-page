import { useState } from "react";
import Wrapper from "../assets/wrappers/Pledge";
import { amountBackedIncrease } from "../actions";
import { useGlobalContext } from "../context";

const Pledge = ({
  reward,
  pledge,
  details,
  stock,
  show,
  onSelect,
  selected,
  toggleSelection,
  onContinue,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [amount, setAmount] = useState(!pledge ? 10 : pledge);
  const { appDispatch } = useGlobalContext();

  const finish = () => {
    console.log(amount);
    console.log(reward);
    onSelect("");
    appDispatch(amountBackedIncrease({ reward, amount }));
    toggleSelection();
    onContinue();
  };

  const onChangeAmount = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setAmount(0);
    } else {
      setAmount(parseInt(value));
    }
  };

  return (
    <Wrapper
      className={`${stock === 0 && "disabled"} ${
        !show && !pledge && !stock && "none"
      } ${selected === reward && show && "selected"} ${show && "show"}`}
    >
      <header className="header">
        <button
          disabled={stock === 0}
          onClick={() => onSelect(reward)}
          className={`select ${!show && "none"}`}
        >
          <div className={`select__btn ${selected !== reward && "none"}`}></div>
        </button>
        <div
          onClick={() => onSelect(reward)}
          className={`header__content ${show && "show"}`}
        >
          <h3 className="reward">{reward}</h3>
          <div className={`pledge ${!pledge && "none"}`}>
            Pledge ${pledge} or more
          </div>
        </div>
      </header>
      <p className={`details ${show && "show"}`}>{details}</p>
      <footer className="footer">
        <div
          className={`remaining ${isNaN(stock) && "none"} ${show && "show"}`}
        >
          <span className="value">{stock}</span>
          <span className="text">left</span>
        </div>
        <button
          onClick={() => {
            onSelect(reward);
            toggleSelection();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          type="button"
          className={`btn ${show && "none"}`}
          disabled={stock === 0}
        >
          {stock === 0 ? "Out of Stock" : "Select Reward"}
        </button>
      </footer>
      <div
        className={`divider ${(!show || selected !== reward) && "none"}`}
      ></div>
      <aside className={`input ${(!show || selected !== reward) && "none"}`}>
        <p className="input__label">Enter your pledge</p>
        <form className="input__form">
          <div
            className={`input__container ${
              (amount < pledge || amount < 1) && "error"
            } ${isFocused && "focused"}`}
          >
            <span>$</span>
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              type="text"
              className="form-input"
              value={amount}
              onChange={onChangeAmount}
            />
          </div>
          <button
            disabled={amount < pledge || amount < 1}
            onClick={finish}
            className="form-btn"
            type="button"
          >
            Continue
          </button>
        </form>
      </aside>
    </Wrapper>
  );
};

export default Pledge;
