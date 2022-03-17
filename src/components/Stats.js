import Wrapper from "../assets/wrappers/Stats";

const Stats = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="stats">
          <div className="stat">
            <span className="stat--main">$89,914</span>
            <span className="stat--sub">of $100,000 backed</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat--main">5,007</span>
            <span className="stat--sub">total backers</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat--main">56</span>
            <span className="stat--sub">days left</span>
          </div>
        </div>
        <div className="gauge"></div>
      </div>
    </Wrapper>
  );
};

export default Stats;
