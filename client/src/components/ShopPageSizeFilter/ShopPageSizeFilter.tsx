import { ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import { Divider, List } from "antd";
import React, { useEffect, useState } from "react";
import { getAllSizes } from "../../api/sizes";
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
  setSelectedSize: (size: string) => void;
}

function ShopPageSizeFilter({
  sizes,
  setSizes,
  setSelectedSize,
}: IShopPageSizeFilterProps) {
  const classes = useStyles();
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    getAllSizes()
      .then((res) => {
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
                onClick={() => {
                  setSelected(i);
                  setSelectedSize(x);
                }}
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
