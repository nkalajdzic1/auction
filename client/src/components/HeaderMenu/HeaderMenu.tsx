import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GavelIcon from "@material-ui/icons/Gavel";
import { Layout, Menu, Input } from "antd";

import "./HeaderMenu.css";

const { Header } = Layout;
const { Search } = Input;

export default function HeaderMenu() {
  const history = useHistory();

  function routeTo(redirection: string) {
    history.push(redirection);
  }

  return (
    <Header className="header">
      <div className="header_icon" onClick={() => routeTo("landing")}>
        <GavelIcon className="header_icon_icon" />
        <Typography variant="h5" className="header_icon_text">
          AUCTION
        </Typography>
      </div>

      <Search placeholder="Search by term" className="header_search" />
      <Menu theme="light" className="header_menu" mode="horizontal">
        <Menu.Item key={1} onClick={() => routeTo("landing")}>
          <div style={{ color: "#8367D8" }}>HOME</div>
        </Menu.Item>
        <Menu.Item key={2} onClick={() => routeTo("shop")}>
          SHOP
        </Menu.Item>
        <Menu.Item key={3} onClick={() => routeTo("terms_and_conditions")}>
          MY ACCOUNT
        </Menu.Item>
      </Menu>
    </Header>
  );
}
