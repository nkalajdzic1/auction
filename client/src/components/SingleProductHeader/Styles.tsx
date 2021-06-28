import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      boxShadow: "none",
      color: "#252525",
    },
    product_left: {
      width: "15%",
      marginLeft: "10%",
    },
    product_right: {
      right: 0,
      display: "flex",
    },
    empty: {
      position: "relative",
      backgroundColor: "white",
      color: "black",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "50%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
      minWidth: "50%",
    },
  })
);

export default Styles;
