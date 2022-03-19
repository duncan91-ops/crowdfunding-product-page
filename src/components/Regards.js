import Wrapper from "../assets/wrappers/Regards";
import icon from "../assets/images/icon-check.svg";

const Regards = ({ onComplete }) => {
  const onButtonClick = () => {
    onComplete();
  };

  return (
    <Wrapper>
      <div className="hero">
        <img src={icon} alt="" className="hero__img" />
      </div>
      <h2 className="title">Thanks for your support!</h2>
      <p className="text">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button onClick={onButtonClick} className="btn" type="button">
        Got it!
      </button>
    </Wrapper>
  );
};

export default Regards;
