import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./SingleProductHeader.css";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";

function SingleProductHeader() {
  return (
    <div className="single_product_header">
      <div className="single_product_breadcrumb_shop">
        <Typography variant="h6">SINGLE PRODUCT</Typography>
      </div>
      <div className="single_product_breadcrumb_auction">
        <Breadcrumbs aria-label="breadcrumb" style={{ float: "right" }}>
          <Link color="inherit" href="/site/shop">
            <Typography variant="h6">SHOP</Typography>
          </Link>
          <Typography variant="h6" color="textSecondary">
            SINGLE PRODUCT
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default SingleProductHeader;
