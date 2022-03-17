import Wrapper from "../assets/wrappers/Modal";

const Modal = ({ children, show, toggleMenu }) => {
  return (
    <Wrapper className={show && "open"} onClick={toggleMenu}>
      {children}
    </Wrapper>
  );
};

export default Modal;
