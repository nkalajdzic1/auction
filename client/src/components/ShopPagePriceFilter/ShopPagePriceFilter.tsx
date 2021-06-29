import { ListSubheader, makeStyles, Slider } from "@material-ui/core";
import { Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./ShopPagePriceFilter.css";

const useStyle = makeStyles({
  root: {
    color: "#8367D8",
    width: "100%",
  },
  title: {
    color: "#8367D8",
    fontWeight: "bold",
    padding: "0 0",
  },
  textColor: {
    color: "#9B9B9B",
  },
});

export interface IShopPagePriceFilterProps {
  price: number[];
  setPrice: (price: number[]) => void;
}

function ShopPagePriceFilter({ price, setPrice }: IShopPagePriceFilterProps) {
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(100);
  let [pp, setPP] = useState<number[]>([price[0], price[1]]);
  const classes = useStyle();

  useEffect(() => {
    axios
      .get("http://localhost:5000/price/max_min_price")
      .then((res) => {
        setPrice([res.data.minPrice, res.data.maxPrice]);
        setMin(res.data.minPrice);
        setMax(res.data.maxPrice);
      })
      .catch((err) => console.log(err))
      .then();
  }, []);

  const handleChange = (event: any, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const handleChangePP = (event: any, newValue: number | number[]) => {
    setPP(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}$`;
  }

  return (
    <div className="shop_page_price_filter">
      <div className="shop_page_price_filter_content">
        <ListSubheader
          component="nav"
          id="nested-list-subheader"
          className={classes.title}
        >
          FILTER BY PRICE
        </ListSubheader>

        <Slider
          min={min}
          max={max}
          value={pp}
          step={0.1}
          className={classes.root}
          onChange={handleChangePP}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          onChangeCommitted={handleChange}
        />
        <Typography className={classes.textColor}>
          ${pp[0].toFixed(2)} - ${pp[1].toFixed(2)}
        </Typography>
        <Typography className={classes.textColor}>
          The average price is ${((pp[0] + pp[1]) / 2).toFixed(2)}
        </Typography>
      </div>
    </div>
  );
}

export default ShopPagePriceFilter;
