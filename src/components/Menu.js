import Wrapper from "../assets/wrappers/Menu";

const Menu = ({ show }) => {
  return (
    <Wrapper className={show && "open"}>
      <ul className="menu">
        <li className="menu-item">About</li>
        <div className="divider"></div>
        <li className="menu-item">Discover</li>
        <div className="divider"></div>
        <li className="menu-item">Get Started</li>
      </ul>
    </Wrapper>
  );
};

export default Menu;
