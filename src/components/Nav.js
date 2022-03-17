import Wrapper from "../assets/wrappers/Nav";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";

const Nav = ({ toggleMenu, show }) => {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button onClick={toggleMenu} className="menu-btn" type="button">
        <img
          src={show ? closeMenu : hamburger}
          className="toggleMenu"
          alt="open menu"
        />
      </button>
      <ul className="menu">
        <li className="menu-item">About</li>
        <li className="menu-item">Discover</li>
        <li className="menu-item">Get Started</li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
