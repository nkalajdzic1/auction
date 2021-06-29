import React, { Dispatch, SetStateAction } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./Styles";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { CategoryPair } from "../ShopPageContainer/ShopPageContainer";

export interface IShopPageHeaderProps {
  breadcrumbs: CategoryPair[];
  setBreadcrumbs: (categories: CategoryPair[]) => void;
  setCategory: (categories: CategoryPair[]) => void;
}

function ShopPageHeader({
  breadcrumbs,
  setBreadcrumbs,
  setCategory,
}: IShopPageHeaderProps) {
  const classes = styles();
  return (
    <div className={classes.root} style={{ paddingBottom: "5%" }}>
      <AppBar position="static" className={classes.app}>
        <Toolbar
          className={classes.toolbar}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginInline: "4%",
          }}
        >
          <div className={classes.product_left}>
            <Typography variant="h6">SHOP</Typography>
          </div>
          <div className={classes.product_right}>
            <Breadcrumbs
              className={classes.breadcrumbs}
              aria-label="breadcrumb"
            >
              <Typography color="textSecondary" variant="h6">
                SHOP
              </Typography>
              {breadcrumbs[0].id != -1 ? (
                [
                  <Link
                    variant="h6"
                    color="textPrimary"
                    onClick={() => {
                      setBreadcrumbs([
                        { id: breadcrumbs[0].id, name: breadcrumbs[0].name },
                        { id: breadcrumbs[0].id, name: breadcrumbs[0].name },
                      ]);
                      setCategory([
                        { id: breadcrumbs[0].id, name: breadcrumbs[0].name },
                        { id: breadcrumbs[0].id, name: breadcrumbs[0].name },
                      ]);
                    }}
                  >
                    {breadcrumbs[0].name}
                  </Link>,
                  <Typography variant="h6" color="textSecondary">
                    {breadcrumbs[1].id != -1 &&
                    breadcrumbs[1].id != breadcrumbs[0].id
                      ? breadcrumbs[1].name
                      : "ALL"}
                  </Typography>,
                ]
              ) : (
                <Typography variant="h6" color="textSecondary">
                  ALL CATEGORIES
                </Typography>
              )}
            </Breadcrumbs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ShopPageHeader;
