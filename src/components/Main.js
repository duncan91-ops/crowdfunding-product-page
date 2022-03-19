import { useState } from "react";
import Wrapper from "../assets/wrappers/Main";
import Header from "./Header";
import Stats from "./Stats";
import About from "./About";
import Modal from "./Modal";
import Selection from "./Selection";
import Regards from "./Regards";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [isContinue, setIsContinue] = useState(false);

  const toggleSelection = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (value) => {
    if (value === selected) {
      return setSelected("");
    }
    setSelected(value);
  };

  const onContinue = () => {
    setIsContinue(true);
  };

  const onComplete = () => {
    setIsContinue(false);
  };

  return (
    <Wrapper>
      <Modal show={isOpen && !isContinue}>
        <Selection
          onSelect={onSelect}
          selected={selected}
          show={isOpen}
          toggleSelection={toggleSelection}
          onContinue={onContinue}
        />
      </Modal>
      <Modal show={isContinue}>
        <Regards onComplete={onComplete} toggleSelection={toggleSelection} />
      </Modal>
      <Header toggleSelection={toggleSelection} />
      <Stats />
      <About
        onSelect={onSelect}
        selected={selected}
        toggleSelection={toggleSelection}
      />
    </Wrapper>
  );
};

export default Main;
