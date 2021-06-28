import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
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
      width: "100%",
      minWidth: "auto",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "10%",
    },
    empty: {
      position: "relative",
      backgroundColor: "white",
      color: "black",
      minWidth: "5%",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    breadcrumbs: {
      width: "auto",
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

export default styles;
