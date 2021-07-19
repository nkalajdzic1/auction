import { Button, withStyles } from "@material-ui/core";

export const FacebookButton = withStyles(() => ({
  root: {
    color: "white",
    borderRadius: 0,
    backgroundColor: "#475993",
    "&:hover": {
      backgroundColor: "#173b91",
    },
  },
}))(Button);

export const GmailButton = withStyles(() => ({
  root: {
    color: "white",
    borderRadius: 0,
    backgroundColor: "#CD5542",
    "&:hover": {
      backgroundColor: "#c92e16",
    },
  },
}))(Button);
