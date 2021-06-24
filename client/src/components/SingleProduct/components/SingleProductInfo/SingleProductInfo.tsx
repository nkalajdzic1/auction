import { Typography, Input, Button, Divider, Paper } from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./Styles";
import { ISingleAuction } from "../../ISingleProduct";

export interface ISingleProductInfoProps {
  auction?: ISingleAuction;
}

function SingleProductInfo({ auction }: ISingleProductInfoProps) {
  if (auction == null) return <div></div>;

  const classes = useStyles();

  var bids = auction.auction_bid.sort((x, y) => {
    if (x.bidding_price < y.bidding_price) return 1;
    else if (x.bidding_price > y.bidding_price) return -1;
    return 0;
  });

  console.log(bids);

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
        >
          Place Bid
        </Button>
      </div>
      <Typography variant="subtitle1" className={classes.put_more}>
        Enter $
        {bids.length > 0 ? bids[0].bidding_price : auction.starting_price} or
        more
      </Typography>
      <div className={classes.highest_bid}>
        <Typography>Highest bid:</Typography>
        <Typography style={{ color: "#8367D8" }}>
          {bids.length > 0 ? "$" + bids[0].bidding_price : "None"}
        </Typography>
      </div>
      <Typography>No bids: {bids.length}</Typography>
      <Typography>Time left: 10 days</Typography>
      <Button
        variant="outlined"
        endIcon={<FavoriteIcon />}
        className={classes.buttonWatchlist}
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
