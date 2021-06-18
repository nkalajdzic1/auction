import React from "react";
import fbIcon from "../../assets/icon/facebook_icon.svg";
import igIcon from "../../assets/icon/instagram_icon.svg";
import twIcon from "../../assets/icon/twitter_icon.svg";
import gpIcon from "../../assets/icon/google_plus_icon.svg";

import "./Header.css";

function Header() {
  return (
    <div id="container">
      <div id="navBar">
        <div className="h_col">
          <img className="ic" src={fbIcon}></img>
          <img className="ic" src={igIcon}></img>
          <img className="ic" src={twIcon}></img>
          <img className="ic" src={gpIcon}></img>
        </div>
        <div className="h_col"></div>
        <div className="h_col">
          <div className="login">
            <a>Login</a> <text>or</text> <a>Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
