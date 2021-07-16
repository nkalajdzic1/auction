import { Button, Input, Link, Typography } from "@material-ui/core";
import React from "react";

import "./RegisterPageContent.css";
import { useStyles } from "./Style";

function RegisterPageContent() {
  const classes = useStyles();
  return (
    <div className="register_page_content">
      <div className="register_page_content_content">
        <div className="register_page_container">
          <Typography className="register_page_title" variant="h5">
            REGISTER
          </Typography>
          <Typography className="register_page_label">First name</Typography>
          <Input className="register_page_input" />
          <Typography className="register_page_label">Last name</Typography>
          <Input className="register_page_input" />
          <Typography className="register_page_label">Enter Email</Typography>
          <Input className="register_page_input" />
          <Typography className="register_page_label">Password</Typography>
          <Input type="password" className="register_page_input" />
          <Button className={classes.buttonRegister} variant="outlined">
            REGISTER
          </Button>
          <div className="register_page_login">
            <Typography variant="caption">
              Alread have an account? <Link href="/login"> Login</Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageContent;
