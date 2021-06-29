import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { useStyles } from "./Styles";

function GridListToggleButton() {
  const [view, setView] = useState("list");
  const classes = useStyles();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    if (nextView == null) return;
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
      className={classes.align}
    >
      <ToggleButton value="grid" aria-label="grid" className={classes.toggle}>
        Grid
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list" className={classes.toggle}>
        List
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default GridListToggleButton;
