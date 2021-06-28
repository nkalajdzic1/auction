import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ISubList } from "./Intefaces";
import { List } from "@material-ui/core";
import { useStylesSubList } from "./Styles";
import { cmp, firstUpperRestLower } from "./Functions";

function SubList({ breadcrumbs, setBreadcrumbs, category }: ISubList) {
  const classes = useStylesSubList();

  if (breadcrumbs == null || setBreadcrumbs == null) return <></>;

  return (
    <>
      <ListItem
        button
        onClick={() => {
          setBreadcrumbs(
            breadcrumbs[0].id == category.id
              ? [
                  { id: -1, name: "" },
                  { id: -1, name: "" },
                ]
              : [
                  { id: category.id, name: category.name },
                  { id: category.id, name: category.name },
                ]
          );
        }}
      >
        <ListItemText primary={firstUpperRestLower(category.name)} />
        {breadcrumbs[0].id == category.id ? (
          <RemoveIcon className={classes.root} />
        ) : (
          <AddIcon />
        )}
      </ListItem>
      <Collapse
        in={breadcrumbs[0].id == category.id ? true : false}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {category.category_category.map((x, i) => {
            return (
              <ListItem
                button
                className={classes.nested}
                selected={
                  breadcrumbs[0].id == category.id && breadcrumbs[1].id == x.id
                    ? true
                    : false
                }
                onClick={() => {
                  setBreadcrumbs([
                    { id: category.id, name: category.name },
                    { id: x.id, name: x.name },
                  ]);
                }}
              >
                <ListItemText
                  primary={
                    (!cmp(category.name, x.name)
                      ? firstUpperRestLower(x.name)
                      : "All") +
                    " (" +
                    x.category_item.length +
                    ")"
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default SubList;
