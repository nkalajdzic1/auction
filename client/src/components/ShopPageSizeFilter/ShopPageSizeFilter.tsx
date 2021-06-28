import { ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import { Divider, List } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { firstUpperRestLower } from "../ShopPageCategories/Functions";

import "./ShopPageSizeFilter.css";
import useStyles from "./Styles";

interface Size {
  size: string;
  item_num: number;
}

export interface IShopPageSizeFilterProps {
  sizes: string[];
  setSizes: (sizes: string[]) => void;
}

function ShopPageSizeFilter({ sizes, setSizes }: IShopPageSizeFilterProps) {
  const classes = useStyles();
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/size/all")
      .then((res) => {
        console.log(res.data);
        var arr = Array.from(
          new Set<string>(
            res.data.map(
              (x: Size) => firstUpperRestLower(x.size) + " (" + x.item_num + ")"
            )
          )
        );
        setSizes(arr);
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
            FILTER BY SIZE
          </ListSubheader>
          <Divider className={classes.divider}></Divider>
          {sizes.map((x, i) => {
            return (
              <ListItem
                button
                selected={selected == i ? true : false}
                onClick={() => setSelected(i)}
              >
                <ListItemText primary={x} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default ShopPageSizeFilter;
