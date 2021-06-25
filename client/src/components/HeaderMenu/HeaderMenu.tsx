import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../../assets/icon/logo.png";
import Styles from "./Styles";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function HeaderMenu() {
  const history = useHistory();
  const classes = Styles();

  function routeTo(redirection: string) {
    history.push(redirection);
  }

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <img
            src={Logo}
            style={{
              width: "15%",
              height: 40,
              marginLeft: "10%",
              cursor: "pointer",
            }}
            onClick={() => routeTo("/landing")}
          ></img>
          <div className={classes.search}>
            <InputBase
              placeholder="Try enter: Shoes"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div>
            <Button
              onClick={() => routeTo("/landing")}
              style={{ color: "#8367D8", fontWeight: "bold" }}
            >
              HOME
            </Button>
            <Button
              onClick={() => routeTo("/shop")}
              style={{ color: "#252525" }}
            >
              SHOP
            </Button>
            <Button
              onClick={() => routeTo("/account")}
              style={{ color: "#252525" }}
            >
              MY ACCOUNT
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
