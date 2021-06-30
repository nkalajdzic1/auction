import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import { Skeleton } from "@material-ui/lab";

export interface IItemCardSkeletonProps {
  id: number;
  styles?: ClassNameMap<"root" | "media">;
}

const defaultStyles = makeStyles({
  root: {
    width: 250,
    height: 350,
  },
  media: {
    height: 250,
    width: 250,
  },
});

const ItemCardSkeleton = ({ id, styles }: IItemCardSkeletonProps) => {
  const classes = styles == null ? defaultStyles() : styles;
  return (
    <Card key={id} className={classes.root} raised={false}>
      <CardActionArea>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
        <CardContent>
          <Skeleton />
          <Skeleton animation="wave" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCardSkeleton;
