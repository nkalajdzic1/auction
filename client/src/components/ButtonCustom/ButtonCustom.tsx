import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const styles = makeStyles({
  bid: {
    color: "#8367D8",
  },
  description: {
    height: "145px",
    maxWidth: "350px",
    overflowWrap: "break-word",
    color: "#252525",
  },
  buttonBid: {
    width: "auto",
    borderColor: "#8367D8",
    borderRadius: 0,
    borderWidth: 3,
  },
});

export interface IButtonCustomProps {
  content: string;
  onClick: () => void;
  styles: ClassNameMap<"bid" | "description" | "buttonBid">;
}

function ButtonCustom({ content, onClick, styles }: IButtonCustomProps) {
  return (
    <Button
      variant="outlined"
      endIcon={<ArrowForwardIosIcon />}
      className={styles.buttonBid}
      onClick={onClick}
    >
      {content}
    </Button>
  );
}

export default ButtonCustom;
