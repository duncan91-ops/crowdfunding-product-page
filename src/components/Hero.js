import { useState } from "react";
import Wrapper from "../assets/wrappers/Hero";
import Nav from "./Nav";
import Modal from "./Modal";
import Menu from "./Menu";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      {isOpen ? (
        <Modal toggleMenu={toggleMenu} show={isOpen}>
          <Nav toggleMenu={toggleMenu} show={isOpen} />
          <Menu show={isOpen} />
        </Modal>
      ) : (
        <Nav toggleMenu={toggleMenu} show={isOpen} />
      )}
    </Wrapper>
  );
};

export default Hero;
