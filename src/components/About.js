import Wrapper from "../assets/wrappers/About";
import Pledge from "./Pledge";
import { useGlobalContext } from "../context";

const About = ({ onSelect, selected, toggleSelection }) => {
  const { appState } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">About this project</h2>
        <p className="text">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="text">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <div className="pledges">
          {appState.rewards.map((reward) => {
            return (
              <Pledge
                key={reward.name}
                {...reward}
                onSelect={onSelect}
                selected={selected}
                toggleSelection={toggleSelection}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
