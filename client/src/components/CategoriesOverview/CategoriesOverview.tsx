import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


import './CategoriesOverview.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '100%',
        maxWidth: 250,
    },
    itemShadow: {
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        marginTop: ".8px",
    },
    list: {

    },
    head: {
        color: "#8367D8"
    }
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

function CategoriesOverview() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <List component="nav" className={classes.list}>
          <ListItem className={classes.head}>
              <ListItemText>CATEGORIES</ListItemText>
          </ListItem>
          {(new Array(10)).fill(null).map((x, i) => {
              return (
                <ListItem button className={classes.itemShadow}>
                    <ListItemText primary="List item"/>
                </ListItem>
              )
          })}
      </List>
    </div>

    )
}

export default CategoriesOverview
