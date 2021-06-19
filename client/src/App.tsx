import "./App.css";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./routes/CustomRoute";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import { AboutUsPage, LandingPage, Page404 } from "./pages";

function App() {
  useEffect(() => {
    if (localStorage.getItem("currentUser") == null)
      localStorage.setItem("currentUser", JSON.stringify({ role: 0 }));
  }, []);

  return (
    <Router basename={"/website"}>
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
          path="/aboutUs"
          component={AboutUsPage}
          title="About us"
        />
        <Route exact path="" component={Routes} />
        <Route exact path="" component={Page404} />x
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
