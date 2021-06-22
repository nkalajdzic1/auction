import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Styles from "./Styles";
import { Typography } from "@material-ui/core";
import { toastRegular } from '../ToastCustom/ToastCustom';

function SingleProductHeader() {
    const classes = Styles();
    const tt = () => toastRegular("toast test");
    return (
        <div>
         <AppBar position="static" className={classes.root} onClick={tt}>
          <Toolbar>
          <div className={classes.product_left}>
              <Typography variant="subtitle1">SINGLE PRODUCT</Typography>
          </div>
          <div className={classes.empty}>
          </div>
          <div className={classes.product_right}>
              <Typography variant="subtitle1" style={{color: "#9B9B9B"}}> SHOP/ </Typography>
              <Typography variant="subtitle1"> SINGLE PRODUCT </Typography>

          </div>
         </Toolbar>
      </AppBar>
        </div>
    )
}

export default SingleProductHeader
