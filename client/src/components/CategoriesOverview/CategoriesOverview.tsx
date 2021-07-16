import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "../../api/categories";

import "./CategoriesOverview.css";
import { useHistory } from "react-router-dom";
import { firstUpperRestLower } from "../ShopPageCategories/Functions";
import { getParentCategories } from "../../api/categories";
import { useStyles } from "./Styles";

export interface IParentCagetoryNames {
  id: number;
  name: string;
}

function CategoriesOverview() {
  const [categories, setCategories] = useState<IParentCagetoryNames[]>([]);
  const history = useHistory();

  useEffect(() => {
    getParentCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const classes = useStyles();

  function routeTo(category: string) {
    history.push("/shop");
  }

  return (
    <div className="categories_list">
      <List component="nav" className={classes.root}>
        <ListItem className={classes.head}>
          <ListItemText className={classes.head}>CATEGORIES</ListItemText>
        </ListItem>
        <Divider></Divider>
        {categories.length > 0 ? (
          categories.map((x, i) => {
            return (
              <>
                <ListItem button onClick={() => routeTo(x.name)}>
                  <ListItemText primary={firstUpperRestLower(x.name)} />
                </ListItem>
                <Divider></Divider>
              </>
            );
          })
        ) : (
          <></>
        )}
      </List>
    </div>
  );
}

export default CategoriesOverview;
