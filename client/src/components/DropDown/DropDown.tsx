import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { classNames } from "react-select/src/utils";
import { useStyles } from "./Styles";
import { toastRegular, toastRegularBlack } from "../ToastCustom/ToastCustom";

const sort = [
  "Sort by Popularity",
  "Sort by rating",
  "Sort by Newness",
  "Sort by Price",
];

function DropDown() {
  const [selected, setSelected] = useState("Sort by");
  const classes = useStyles();

  const menu = (
    <Menu>
      {sort.map((x, i) => {
        return (
          <Menu.Item
            key={i}
            onClick={() => {
              setSelected(x);
              toastRegularBlack("Sorted by " + x.slice(8, x.length));
            }}
          >
            <a target="_blank">{x}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button className={classes.root}>
        <span className={classes.left}>{selected}</span>
        <ExpandMoreIcon className={classes.right} />
      </Button>
    </Dropdown>
  );
}

export default DropDown;
