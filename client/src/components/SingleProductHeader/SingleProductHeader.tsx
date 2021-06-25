import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Styles from "./Styles";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";

function SingleProductHeader() {
  const classes = Styles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className={classes.product_left}>
            <Typography variant="h6">SINGLE PRODUCT</Typography>
          </div>
          <div className={classes.empty}></div>
          <div className={classes.product_right}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/site/shop/">
                <Typography variant="h6">SHOP</Typography>
              </Link>
              <Typography variant="h6" color="textSecondary">
                SINGLE PRODUCT
              </Typography>
            </Breadcrumbs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SingleProductHeader;
