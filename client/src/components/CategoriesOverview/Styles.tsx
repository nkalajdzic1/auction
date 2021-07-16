import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 250,
      maxWidth: 250,
    },
    head: {
      color: "#8367D8",
      fontWeight: "bold",
    },
  })
);
