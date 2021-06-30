import React, { useEffect, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "./CategoriesOverview.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { firstUpperRestLower } from "../ShopPageCategories/Functions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 250,
      maxWidth: 250,
    },
    head: {
      color: "#8367D8",
      fontWeight: "bold",
    },
  })
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export interface IParentCagetoryNames {
  id: number;
  name: string;
}

function CategoriesOverview() {
  const [categories, setCategories] = useState<IParentCagetoryNames[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/parent_categories")
      .then((res) => {
        console.log(res.data);
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
