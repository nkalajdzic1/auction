import React, { useState } from "react";
import { Image } from "antd";

import "./ItemCardShop.css";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Paragraph from "antd/lib/typography/Paragraph";
import GavelIcon from "@material-ui/icons/Gavel";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IAuctionIdBody } from "../ItemCard/ItemCard";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  buttonWatchlist: {
    borderColor: "#ECECEC",
    borderRadius: 0,
    borderWidth: 3,
  },
  buttonWatchlistActive: {
    borderColor: "#8367D8",
    borderRadius: 0,
    borderWidth: 3,
  },
  buttonBid: {
    borderColor: "#ECECEC",
    borderRadius: 0,
    borderWidth: 3,
  },
});

function ItemCardShop() {
  const classes = useStyles();
  const [watchlistStyle, setWatchlistStyle] = useState(classes.buttonWatchlist);
  const history = useHistory();

  function routeTo(id: number) {
    var body: IAuctionIdBody = {
      auction_id: id,
    };
    history.push({
      pathname: "/single_product",
      state: body,
    });
  }

  return (
    <div className="item_card_shop">
      <div className="item_card_shop_img">
        <Image
          style={{ objectFit: "cover" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
      <div className="item_card_shop_content">
        <div className="item_card_shop_title">
          <Typography style={{ fontStyle: "bold" }} noWrap={true} variant="h5">
            Titlesssssssssssssssssssssssssssssssssssssssssssssss
          </Typography>
        </div>
        <div className="item_card_shop_description">
          <Paragraph
            style={{ color: "#9B9B9B" }}
            ellipsis={{ rows: 4, expandable: false }}
          >
            {new Array(333).fill("A").map((x, i) => {
              return x;
            })}
          </Paragraph>
        </div>
        <div className="item_card_shop_price">
          <Typography style={{ color: "#8367D8" }} variant="h5">
            Start from ${"59.00"}
          </Typography>
        </div>
        <div className="item_card_shop_buttons">
          <div className="item_card_shop_watchlist">
            <Button
              variant="outlined"
              endIcon={<FavoriteIcon />}
              className={watchlistStyle}
              onClick={() => {
                watchlistStyle == classes.buttonWatchlist
                  ? setWatchlistStyle(classes.buttonWatchlistActive)
                  : setWatchlistStyle(classes.buttonWatchlist);
              }}
            >
              Watchlist
            </Button>
          </div>
          <div className="item_card_shop_bid">
            <Button
              variant="outlined"
              className={classes.buttonBid}
              onClick={() => routeTo(1)}
              endIcon={<GavelIcon />}
            >
              Bid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCardShop;
