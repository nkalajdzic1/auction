import { Typography } from "@material-ui/core";
import React from "react";
import LoginPageContent from "../../components/LoginPageContent/LoginPageContent";
import Page from "../../components/Page/Page";

import "./LoginPage.css";

function LoginPage() {
  return (
    <Page>
      <div className="login_header">
        <Typography variant="h6">LOGIN</Typography>
      </div>
      <LoginPageContent />
    </Page>
  );
}

export default LoginPage;
