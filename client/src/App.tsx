import "./App.css";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./routes/CustomRoute";
import Routes from "./routes/Routes";
import { AboutUsPage, LandingPage, Page404, SingleProductPage } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    if (localStorage.getItem("currentUser") == null)
      localStorage.setItem("currentUser", JSON.stringify({ role: 0 }));
  }, []);

  return (
    <Router basename={"/site"}>
      <Routes />
      <ToastContainer draggable={false} />
    </Router>
  );
}

export default App;
