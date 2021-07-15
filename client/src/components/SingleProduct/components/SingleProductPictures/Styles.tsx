import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    borderRadius: 5,
    objectFit: "cover",
    height: 500,
  },
  images: {
    paddingTop: 10,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  smallImage: {
    height: 100,
    width: "100%",
    backgroundColor: "#ECECEC",
  },
  arrow: {
    minWidth: 40,
    width: 40,
  },
});
