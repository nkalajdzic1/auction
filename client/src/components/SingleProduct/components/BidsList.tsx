import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ISingleAuction } from "../ISingleProduct";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  root: {
    width: "80%",
    marginLeft: "10%",
    maxHeight: 64 * 4,
    paddingBottom: "10%",
    marginBottom: "10%",
    marginTop: "10%",
  },
  header: {
    border: "none",
    backgroundColor: "#F0F0F0",
  },
  body: {
    border: "none",
  },
  table_body: {
    overflowY: "scroll",
    border: "none",
  },
});

export interface IBidsList {
  auction?: ISingleAuction;
}

function BidsList({ auction }: IBidsList) {
  const classes = useStyles();

  var bids =
    auction != null
      ? auction.auction_bid.sort((x, y) => {
          if (x.bidding_price < y.bidding_price) return 1;
          else if (x.bidding_price > y.bidding_price) return -1;
          return 0;
        })
      : [];

  return (
    <div>
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>
                <Typography variant="h6">Bider</Typography>
              </TableCell>
              <TableCell className={classes.header} align="left">
                <Typography variant="h6">Date</Typography>
              </TableCell>
              <TableCell className={classes.header} align="left">
                <Typography variant="h6">Bid</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {bids.length > 0 ? (
            <TableBody className={classes.table_body}>
              {bids.map((bid, i) => (
                <TableRow key={i}>
                  <TableCell
                    className={classes.body}
                    component="th"
                    scope="row"
                  >
                    <Typography variant="h6">
                      {bid.user.name + " " + bid.user.surname}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.body} align="left">
                    <Typography variant="h6">{bid.bidding_date}</Typography>
                  </TableCell>
                  <TableCell className={classes.body} align="left">
                    <Typography variant="h6">$ {bid.bidding_price}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <></>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}

export default BidsList;
