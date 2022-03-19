import { useState } from "react";
import Wrapper from "../assets/wrappers/Header";
import logoImage from "../assets/images/logo-mastercraft.svg";
import { ReactComponent as Icon } from "../assets/images/icon-bookmark.svg";

const Header = ({ toggleSelection }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

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
          <button
            onClick={toggleSelection}
            className="btn primary-btn"
            type="button"
          >
            Back this project
          </button>
          <div
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`bookmark ${isBookmarked && "bookmarked"}`}
          >
            <Icon className="bookmark-img" />
            {/* <img src={bookmarkIcon} alt="bookmark" className="bookmark-img" /> */}
            <button className="btn secondary-btn" type="button">
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
