import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      borderColor: "#D8D8D8",
      borderStyle: "solid",
      borderWidth: 0.5,
      paddingBottom: 0,
    },
    subheader: {
      color: "#8367D8",
      fontWeight: "bold",
    },
    divider: {
      margin: "0 0",
      padding: "0 0",
    },
  })
);

export default useStyles;
