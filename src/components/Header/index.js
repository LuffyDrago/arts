import React from "react";
import "./styles.scss";

import Logo from "./../../assets/logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          {/* <Link to="/"> */}
          <img src={Logo} alt="LOGO" />
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
