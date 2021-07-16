import { makeStyles } from "@material-ui/core";

export const mediumCard = makeStyles({
  root: {
    width: 250,
    maxWidth: 250,
    height: 450,
  },
  media: {
    maxWidth: 250,
    height: 350,
  },
  font: {
    fontSize: "1.8em",
    listStyle: "none",
    fontWeight: 400,
  },
  divider: {
    width: "100%",
  },
  feature: {
    witdh: "auto",
  },
});

export const mediumSkeletonCard = makeStyles({
  root: {
    width: 250,
    maxWidth: 250,
    height: 450,
  },
  media: {
    maxWidth: 250,
    height: 350,
  },
});
