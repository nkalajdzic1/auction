import React from "react";
import fbIcon from "../../assets/icon/facebook_icon.svg";
import igIcon from "../../assets/icon/instagram_icon.svg";
import twIcon from "../../assets/icon/twitter_icon.svg";
import gpIcon from "../../assets/icon/google_plus_icon.svg";

import "./Header.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar, Button, Typography } from "@material-ui/core";
import { useStyle } from "./Style";
import { toastSucces } from "../ToastCustom/ToastCustom";
import { logoutUser } from "../../api/auth";

function Header() {
  const history = useHistory();
  const classes = useStyle();
  const {
    setCurrentUser,
    userProfilePicture,
    setUserProfilePicture,
    setUserName,
    logout
  } = useAuth();

  const routeTo = (path: string) => {
    history.push(path);
  };

  const logOut = () => {
    setCurrentUser("");
    setUserProfilePicture("");
    setUserName("");

    logoutUser()
      .then(() => {
        localStorage.clear();
        logout();
        routeTo("/");
        toastSucces("Logged out");
      })
      .catch((err: any) => console.log(err));
  };

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
            {localStorage.getItem("accessToken") != null ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Avatar
                  alt="profile picture"
                  className={classes.picSize}
                  src={userProfilePicture}
                />
                <Button onClick={logOut} style={{ color: "white" }}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <a onClick={() => routeTo("/login")}>Login</a> <text>or</text>
                {` `}
                <a onClick={() => routeTo("/register")}>Create account</a>
              </>
            )}
          </div>
        </div>
      </div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}

export default Header;
