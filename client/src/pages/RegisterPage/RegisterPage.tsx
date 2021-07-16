import { Typography } from "@material-ui/core";
import React from "react";
import Page from "../../components/Page/Page";
import RegisterPageContent from "../../components/RegisterPageContent/RegisterPageContent";

import "./RegisterPage.css";

function RegisterPage() {
  return (
    <Page>
      <div className="register_header">
        <Typography variant="h6">REGISTER</Typography>
      </div>
      <RegisterPageContent />
    </Page>
  );
}

export default RegisterPage;
