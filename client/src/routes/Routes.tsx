import React from "react";

import { Switch } from "react-router-dom";

//import { PermissionType } from "../shared/types";
import CustomRoute from "./CustomRoute";
import { LandingPage, AboutUsPage, Page404 } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <CustomRoute
        // permission={[PermissionType.All]}
        exact
        path="/"
        component={LandingPage}
        title="Home"
      />
      <CustomRoute
        //permission={[PermissionType.All]}
        exact
        path="/landing"
        component={LandingPage}
        title="Home"
      />
      <CustomRoute
        // permission={[PermissionType.All]}
        exact
        path="/aboutUs"
        component={AboutUsPage}
        title="About us"
      />
    </Switch>
  );
};

export default Routes;
