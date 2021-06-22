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
        width: 250,
        maxWidth: 250,
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
        <div className="categories_list">
        <List component="nav" className={classes.root}>
          <ListItem className={classes.head}>
              <ListItemText>CATEGORIES</ListItemText>
          </ListItem>
          <Divider></Divider>
          {(new Array(10)).fill(null).map((x, i) => {
              return (
                <>
                <ListItem button>
                    <ListItemText primary="List item"/>
                </ListItem>
                <Divider></Divider>
                </>
              )
          })}
      </List>
    </div>

    )
}

export default CategoriesOverview
