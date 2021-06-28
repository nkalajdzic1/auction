import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStylesShopPageCategories = makeStyles((theme: Theme) =>
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
  })
);

export const useStylesSubList = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#8367D8",
    },
    nested: {
      paddingLeft: theme.spacing(4),
      color: "#9B9B9B",
    },
    subCategory: {},
  })
);
