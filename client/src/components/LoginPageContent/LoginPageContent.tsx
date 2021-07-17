import {
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  Link,
  Typography,
  withStyles,
} from "@material-ui/core/";
import React, { useState } from "react";
import { useStyles } from "../RegisterPageContent/Style";

import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

import firebase from "firebase/app";
import "firebase/auth";

import "./LoginPageContent.css";
import { styles } from "./Style";

const FacebookButton = withStyles(() => ({
  root: {
    color: "white",
    borderRadius: 0,
    backgroundColor: "#475993",
    "&:hover": {
      backgroundColor: "#173b91",
    },
  },
}))(Button);

const GmailButton = withStyles(() => ({
  root: {
    color: "white",
    borderRadius: 0,
    backgroundColor: "#CD5542",
    "&:hover": {
      backgroundColor: "#c92e16",
    },
  },
}))(Button);

function LoginPageContent() {
  const classes = useStyles();
  const loginClasses = styles();
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        console.log(userCredentials);
      });
  };

  const loginWithFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => console.log(err));
  };

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
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                name="checkedC"
                color="primary"
                onChange={handleChange}
              />
            }
            label="Remember me"
          />
          <div className="login_page_button">
            <Button className={classes.buttonRegister} variant="outlined">
              LOGIN
            </Button>
            <div className="login_page_other_logins">
              <FacebookButton
                startIcon={<FacebookIcon />}
                className={loginClasses.login}
                onClick={loginWithFacebook}
              >
                LOGIN WITH FACEBOOK
              </FacebookButton>
              <GmailButton
                startIcon={<MailOutlineRoundedIcon />}
                className={loginClasses.login}
                onClick={loginWithGoogle}
              >
                LOGIN WITH GMAIL
              </GmailButton>
            </div>
          </div>
          <div className="login_page_forgot_password">
            <Typography variant="caption">
              <Link href="/">Forgot password?</Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageContent;
function createTheme(arg0: { palette: { primary: string } }) {
  throw new Error("Function not implemented.");
}
