import Wrapper from "../assets/wrappers/Pledge";

const Pledge = ({ name, details, reward, stock }) => {
  return (
    <Wrapper className={`${stock === 0 && "disabled"}`}>
      <header className="header">
        <h3 className="title">{name}</h3>
        <div className="details">{details}</div>
      </header>
      <p className="reward">{reward}</p>
      <footer className="footer">
        <div className="remaining">
          <span className="value">{stock}</span>
          <span className="text">left</span>
        </div>
        <button type="button" className="btn" disabled={stock === 0}>
          {stock === 0 ? "Out of Stock" : "Select Reward"}
        </button>
      </footer>
    </Wrapper>
  );
};

export default Pledge;
