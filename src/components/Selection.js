import Pledge from "./Pledge";
import Wrapper from "../assets/wrappers/Selection";
import { useGlobalContext } from "../context";
import closeModal from "../assets/images/icon-close-modal.svg";

const Selection = ({
  show,
  toggleSelection,
  onSelect,
  selected,
  onContinue,
}) => {
  const { appState } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <h2 className="title">Back this project</h2>
          <button
            onClick={() => {
              toggleSelection();
              onSelect("");
            }}
            className="modal-btn"
            type="button"
          >
            <img src={closeModal} alt="close modal" />
          </button>
        </div>
        <p className="text">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="pledges">
          {appState.rewards.map((reward) => {
            return (
              <Pledge
                key={reward.name}
                {...reward}
                show={show}
                onSelect={onSelect}
                selected={selected}
                onContinue={onContinue}
                toggleSelection={toggleSelection}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Selection;
