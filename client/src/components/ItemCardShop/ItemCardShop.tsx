import React, { useState } from "react";
import { Image } from "antd";

import "./ItemCardShop.css";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Paragraph from "antd/lib/typography/Paragraph";
import GavelIcon from "@material-ui/icons/Gavel";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IAuctionIdBody } from "../ItemCard/ItemCard";
import { useHistory } from "react-router-dom";
import { IAuctionItemShop } from "../ShopPageContainer/ShopPageContainer";
import { blobToImage } from "../NTLOverview/NTLOverview";

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

export interface IItemCardShopProps {
  item?: IAuctionItemShop;
}

function ItemCardShop({ item }: IItemCardShopProps) {
  if (item == null) return <></>;

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
          className="item_card_shop_image"
          src={blobToImage(item.item.item_item_picture[0].picture)}
        />
      </div>
      <div className="item_card_shop_content">
        <div className="item_card_shop_title">
          <Typography style={{ fontStyle: "bold" }} noWrap={true} variant="h5">
            {item.item.name}
          </Typography>
        </div>
        <div className="item_card_shop_description">
          <Paragraph
            style={{ color: "#9B9B9B" }}
            ellipsis={{ rows: 4, expandable: false }}
          >
            {item.item.description}
          </Paragraph>
        </div>
        <div className="item_card_shop_price">
          <Typography style={{ color: "#8367D8" }} variant="h5">
            Start from ${item.starting_price}
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
              onClick={() => routeTo(item.item.id)}
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
