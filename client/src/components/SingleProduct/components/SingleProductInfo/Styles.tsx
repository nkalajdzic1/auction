import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  price: {
    color: "#8367D8",
    marginTop: "1%",
  },
  input: {
    backgroundColor: "#ECECEC",
    padding: 10,
    fontSize: 20,
    color: "black",
  },
  price_input: {
    display: "flex",
    gap: 10,
    marginTop: "10%",
  },
  put_more: {
    marginTop: "1%",
    color: "#9B9B9B",
  },
  buttonBid: {
    borderColor: "#8367D8",
    borderRadius: 0,
    borderWidth: 3,
  },
  rating: {},
  highest_bid: {
    display: "flex",
    gap: 5,
  },
  info: {
    marginTop: "3%",
    display: "flex",
  },
  bids: {
    marginLeft: "5%",
  },
  buttonWatchlist: {
    marginTop: "5%",
    width: "50%",
    borderColor: "#ECECEC",
    borderRadius: 0,
    borderWidth: 3,
  },
  buttonWatchlistActive: {
    marginTop: "5%",
    width: "50%",
    borderColor: "#8367D8",
    borderRadius: 0,
    borderWidth: 3,
  },
  details: {
    marginTop: "5%",
  },
  divider: {
    height: 5,
  },
  paperInfo: {
    height: "100%",
    maxHeight: "100%",
    marginTop: "1%",
  },
  description: {
    margin: "2% 2%",
    overflowWrap: "break-word",
  },
});
