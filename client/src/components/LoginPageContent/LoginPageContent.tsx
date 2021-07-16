import { Button, Input, Typography } from "@material-ui/core";
import React from "react";

import "./LoginPageContent.css";

function LoginPageContent() {
  return (
    <div className="login_page_content">
      <div className="login_page_content_content">
        <div className="login_page_container">
          <Typography className="login_page_title" variant="h5">
            LOGIN
          </Typography>
          <Typography className="login_page_label">Enter Email</Typography>
          <Input className="login_page_input" />
          <Typography className="login_page_label">Password</Typography>
          <Input type="password" className="login_page_input" />
          <Button variant="outlined">LOGIN</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPageContent;
