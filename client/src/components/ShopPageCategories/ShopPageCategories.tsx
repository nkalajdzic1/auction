import React, { useEffect, useState } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import axios from "axios";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { Divider } from "@material-ui/core";
import { useStylesShopPageCategories } from "./Styles";
import { IShopPageCategories, IShopPageCategoriesProps } from "./Intefaces";
import SubList from "./SubList";

function ShopPageCategories({
  breadcrumbs,
  setBreadcrumbs,
}: IShopPageCategoriesProps) {
  const history = useHistory();
  const location = history.location;
  let params = queryString.parse(location.search);

  const classes = useStylesShopPageCategories();
  const [categories, setCategories] = useState<IShopPageCategories[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);

    axios
      .get("http://localhost:5000/category/categories")
      .then((res) => {
        setCategories(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className={classes.subheader}
        >
          PRODUCT CATEGORIES
        </ListSubheader>
      }
      className={classes.root}
    >
      <Divider></Divider>
      {categories.map((x, i) => {
        return (
          <SubList
            breadcrumbs={breadcrumbs}
            setBreadcrumbs={setBreadcrumbs}
            category={x}
          />
        );
      })}
    </List>
  );
}

export default ShopPageCategories;
