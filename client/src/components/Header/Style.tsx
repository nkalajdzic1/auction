import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    picSize: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    }
  }),
);