import Wrapper from "../assets/wrappers/Header";
import logoImage from "../assets/images/logo-mastercraft.svg";
import bookmarkIcon from "../assets/images/icon-bookmark.svg";

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo-box">
          <img src={logoImage} alt="logo" className="logo" />
        </div>
        <h1 className="title">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="btn-container">
          <button className="btn primary-btn" type="button">
            Back this project
          </button>
          <div className="bookmark">
            <img src={bookmarkIcon} alt="bookmark" className="bookmark-img" />
            <button className="btn secondary-btn" type="button">
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
