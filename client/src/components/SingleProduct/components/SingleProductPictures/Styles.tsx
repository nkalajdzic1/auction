import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    lastChild: {
      paddingBottom: 0,
    },
    maxWidth: "100%",
  },
  media: {
    height: "750px",
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
