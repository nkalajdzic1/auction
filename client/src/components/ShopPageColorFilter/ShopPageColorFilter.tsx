import { ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import { Divider, List } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TMBD_API_URL } from "../../const";
import { firstUpperRestLower } from "../ShopPageCategories/Functions";

import "./ShopPageColorFilter.css";
import useStyles from "./Styles";

interface ColorPair {
  color: string;
}

export interface IShopPageColorFilterProps {
  colors: string[];
  setColors: (colors: string[]) => void;
  setSelectedColor: (color: string) => void;
}

function ShopPageColorFilter({
  colors,
  setColors,
  setSelectedColor,
}: IShopPageColorFilterProps) {
  const classes = useStyles();
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    axios
      .get(`${TMBD_API_URL}/color/all`)
      .then((res) => {
        var arr = Array.from(
          new Set<string>(res.data.map((x: ColorPair) => x.color))
        );
        setColors(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shop_page_color_filter">
      <div className="shop_page_color_filter_content">
        <List aria-labelledby="nested-list-subheader" className={classes.root}>
          <ListSubheader
            component="nav"
            id="nested-list-subheader"
            className={classes.subheader}
          >
            FILTER BY COLOR
          </ListSubheader>
          <Divider className={classes.divider}></Divider>
          {colors.map((x, i) => {
            return (
              <ListItem
                button
                selected={selected == i ? true : false}
                onClick={() => {
                  setSelected(i);
                  setSelectedColor(x);
                }}
              >
                <ListItemText primary={firstUpperRestLower(x)} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default ShopPageColorFilter;
