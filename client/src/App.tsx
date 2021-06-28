import "./App.css";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./routes/CustomRoute";
import Routes from "./routes/Routes";
import { AboutUsPage, LandingPage, Page404, SingleProductPage } from "./pages";
import { ToastContainer } from "react-toastify";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  useEffect(() => {
    if (localStorage.getItem("currentUser") == null)
      localStorage.setItem("currentUser", JSON.stringify({ role: 0 }));
  }, []);

  return (
    <Router basename={"/site"}>
      <Switch>
        <CustomRoute
          //permission={[PermissionType.All]}
          exact
          path="/landing"
          component={LandingPage}
          title="Landing Page"
        />
        <CustomRoute
          //permission={[PermissionType.All]}
          exact
          path="/"
          component={LandingPage}
          title="Landing Page"
        />
        <CustomRoute
          //permission={[PermissionType.All]}
          exact
          path="/about_us"
          component={AboutUsPage}
          title="About us"
        />
        <CustomRoute
          //permission={[PermissionType.All]}
          exact
          path="/shop"
          component={ShopPage}
          title="Shop"
        />
        <Route exact path="/single_product" component={SingleProductPage} />
        <Route exact path="" component={Routes} />
        <Route exact path="" component={Page404} />
      </Switch>
      <ToastContainer draggable={false} />
    </Router>
  );
}

export default App;
