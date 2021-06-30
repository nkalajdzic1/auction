import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./Styles";

const sort = [
  "Sort by Popularity",
  "Sort by Rating",
  "Sort by Newness",
  "Sort by Price",
];

export interface IDropDown {
  dropdown: string;
  setDropdown: (sort: string) => void;
}

function DropDown({ dropdown, setDropdown }: IDropDown) {
  const [selected, setSelected] = useState(sort[0]);
  const classes = useStyles();

  const menu = (
    <Menu>
      {sort.map((x, i) => {
        return (
          <Menu.Item
            key={i}
            onClick={() => {
              setSelected(x);
              setDropdown(x);
              //toastRegularBlack("Sorted by " + x.slice(8, x.length));
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
