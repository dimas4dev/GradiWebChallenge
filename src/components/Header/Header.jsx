import React from "react";
import SerempreIcon from "../../assets/images/SerempreIcon.png";
import "../../assets/styles/Header/Header.scss";
const Header = () => {
  return (
    <header className="HeaderContainer">
      <img className="SerempreIcon" src={SerempreIcon} alt="icon" />
    </header>
  );
};

export default Header;
