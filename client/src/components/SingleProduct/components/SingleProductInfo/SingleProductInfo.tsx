import { Typography, Input, Button, Divider, Paper } from "@material-ui/core";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./Styles";
import { ISingleAuction } from "../../ISingleProduct";
import Countdown from "antd/lib/statistic/Countdown";
import "antd/dist/antd.css";

export interface ISingleProductInfoProps {
  auction?: ISingleAuction;
}

function SingleProductInfo({ auction }: ISingleProductInfoProps) {
  if (auction == null) return <div></div>;

  const classes = useStyles();
  const [bidDisabled, setBidDisabled] = useState(false);
  const [watchlistStyle, setWatchlistStyle] = useState(classes.buttonWatchlist);

  var bids = auction.auction_bid.sort((x, y) => {
    if (x.bidding_price < y.bidding_price) return 1;
    else if (x.bidding_price > y.bidding_price) return -1;
    return 0;
  });

  function dateDiffInDays(a: Date, b: Date) {
    return Math.abs(a.getDate() - b.getDate());
  }
  var format =
    dateDiffInDays(new Date(), new Date(auction.end_date)) > 0
      ? "DDd HH:mm:ss"
      : "HH:mm:ss";

  return (
    <div className="single_product_info">
      <Typography variant="h3">{auction.item.name}</Typography>
      <Typography variant="h5" className={classes.price}>
        Start from - ${auction.starting_price}
      </Typography>
      <div className={classes.price_input}>
        <Input placeholder={"Enter price"} className={classes.input}></Input>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
          className={classes.buttonBid}
          disabled={bidDisabled}
        >
          Place Bid
        </Button>
      </div>
      <Typography variant="subtitle1" className={classes.put_more}>
        Enter $
        {bids.length > 0 ? bids[0].bidding_price : auction.starting_price} or
        more
      </Typography>
      <div className={classes.info}>
        <div>
          <Typography className={classes.rating}>
            Rating: {auction.item.rating}
          </Typography>
          <Typography>
            Color:{" "}
            {auction.item.color.toLocaleUpperCase()[0] +
              auction.item.color
                .toLocaleLowerCase()
                .slice(1, auction.item.color.length)}
          </Typography>
          <Typography>Size: {auction.item.size}</Typography>
        </div>
        <div className={classes.bids}>
          <div className={classes.highest_bid}>
            <Typography>Highest bid:</Typography>
            <Typography style={{ color: "#8367D8" }}>
              {bids.length > 0 ? "$" + bids[0].bidding_price : "None"}
            </Typography>
          </div>
          <Typography>No bids: {bids.length}</Typography>
        </div>
      </div>
      <Countdown
        style={{ marginTop: "5%" }}
        title="Time left"
        value={auction.end_date}
        onFinish={() => setBidDisabled(true)}
        format={format}
      />

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
      <Typography variant="h5" className={classes.details}>
        Details
      </Typography>
      <Paper elevation={3} className={classes.paperInfo}>
        <Typography className={classes.description}>
          {auction.item.description}
        </Typography>
      </Paper>
    </div>
  );
}

export default SingleProductInfo;
