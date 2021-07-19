import "./App.css";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./routes/CustomRoute";
import Routes from "./routes/Routes";
import { AboutUsPage, LandingPage, Page404, SingleProductPage } from "./pages";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router basename={"/site"}>
      <AuthProvider>
        <Routes />
        <ToastContainer draggable={false} />
      </AuthProvider>
    </Router>
  );
}

export default App;
