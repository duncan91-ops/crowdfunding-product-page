import { useRef, useEffect } from "react";
import Wrapper from "../assets/wrappers/Stats";
import { useGlobalContext } from "../context";

const Stats = () => {
  const gaugeRef = useRef();
  const { appState } = useGlobalContext();

  useEffect(() => {
    const { amountBacked, target } = appState;
    let value = ((amountBacked / target) * 100).toFixed(0);
    if (Number(value) > 100) {
      value = 100;
    }
    gaugeRef.current.style.width = `${value}%`;
  });
  return (
    <Wrapper>
      <div className="container">
        <div className="stats">
          <div className="stat">
            <span className="stat--main">
              ${appState.amountBacked.toLocaleString()}
            </span>
            <span className="stat--sub">
              of ${appState.target.toLocaleString()} backed
            </span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat--main">
              {appState.numberBackers.toLocaleString()}
            </span>
            <span className="stat--sub">total backers</span>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <span className="stat--main">56</span>
            <span className="stat--sub">days left</span>
          </div>
        </div>
        <div className="gauges">
          <div className="gauge gauge--main"></div>
          <div ref={gaugeRef} className="gauge gauge--sub"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Stats;
