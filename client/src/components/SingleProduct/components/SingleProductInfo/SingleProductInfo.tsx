import { Typography, Input, Button, Divider, Paper } from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./Styles";

function SingleProductInfo() {
  const classes = useStyles();
  return (
    <div className="single_product_info">
      <Typography variant="h3">Running Shoes</Typography>
      <Typography variant="h5" className={classes.price}>
        Start from - $240.00
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
        Enter $260.00 or more
      </Typography>
      <div className={classes.highest_bid}>
        <Typography>Highest bid:</Typography>
        <Typography style={{ color: "#8367D8" }}>$260.00</Typography>
      </div>
      <Typography>No bids: 2</Typography>
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
      <Paper elevation={3} className={classes.paperInfo}></Paper>
    </div>
  );
}

export default SingleProductInfo;
