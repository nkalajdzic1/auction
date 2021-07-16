import React from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { defaultStyles } from "./Styles";

export interface IItemCardProps {
  id: number;
  imageURL: string;
  title: string;
  starting_price: number;
  styles?: ClassNameMap<"root" | "media">;
}

export interface IAuctionIdBody {
  auction_id: number;
}

function ItemCard({
  id,
  imageURL,
  title,
  starting_price,
  styles,
}: IItemCardProps) {
  const history = useHistory();
  const classes = styles == null ? defaultStyles() : styles;

  function routeTo(id: number) {
    var body: IAuctionIdBody = {
      auction_id: id,
    };
    history.push({
      pathname: "/single_product",
      state: body,
    });
  }

  return (
    <Card
      key={id}
      className={classes.root}
      onClick={() => routeTo(id)}
      raised={false}
    >
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
