import React from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

import "./ItemCard.css";

export interface IItemCardProps {
  id: number;
  imageURL: string;
  title: string;
  starting_price: number;
  styles?: ClassNameMap<"root" | "media">;
  onClickF: () => void;
}

const defaultStyles = makeStyles({
  root: {
    width: 250,
    height: 350,
  },
  media: {
    height: 250,
  },
});

function ItemCard({
  id,
  imageURL,
  title,
  starting_price,
  styles,
  onClickF,
}: IItemCardProps) {
  const classes = styles == null ? defaultStyles() : styles;
  return (
    <Card key={id} className={classes.root} onClick={onClickF} raised={false}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageURL} title={title} />
        <CardMedia className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Start From ${starting_price}
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;
