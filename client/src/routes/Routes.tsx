import React from "react";

import { Switch } from "react-router-dom";

//import { PermissionType } from "../shared/types";
import CustomRoute from "./CustomRoute";
import { LandingPage, AboutUsPage, Page404 } from "../pages";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";

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
        path="/about_us"
        component={AboutUsPage}
        title="About us"
      />
      <CustomRoute
        // permission={[PermissionType.All]}
        exact
        path="/single_product/"
        component={SingleProductPage}
        title="Single product"
      />
    </Switch>
  );
};

export default Routes;
