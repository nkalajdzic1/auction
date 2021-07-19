import { Button, Input, Link, Typography } from "@material-ui/core/";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "universal-cookie";
import { useStyles } from "../RegisterPageContent/Style";

import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

import "./LoginPageContent.css";
import { styles } from "./Style";
import { FacebookButton, GmailButton } from "./LoginPageButtons";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { TMBD_API_URL } from "../../const";

function LoginPageContent() {
  const classes = useStyles();
  const loginClasses = styles();
  const [rememberMe, setRememberMe] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login, loginWithFacebook, loginWithGMail, currentUser } = useAuth();
  const history = useHistory();
  /*const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );*/

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const cookies = new Cookies();

  useEffect(() => {
    /*firebase.auth().onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        setAuth(true);
        userCredentials
          .getIdTokenResult()
          .then((token) => console.log(`\n\n ${token}`))
          .catch((err) => console.log(err));
        window.localStorage.setItem("auth", "true");
        userCredentials.getIdToken().then((token) => {
          window.localStorage.setItem("token", token);
        });
      }
    });*/
  }, []);

  const gmailLogin = async () => {
    await loginWithGMail();
    
    /*axios
      .get(`${TMBD_API_URL}/auth/rand`, { withCredentials: true })
      .then((res) => {
        //cookies.set("refresh_token", res.headers["refresh_token"], {path: '/'});
        console.log(res.data);
      })
      .catch((err) => console.log(err));*/
   
  };

  const facebookLogin = async () => {
    await loginWithFacebook();
  };

  const handleLogin = async () => {
    if (emailRef.current && passwordRef.current) {
      await login(emailRef.current.value, passwordRef.current.value);
      //history.push("/");
    }
  };

  console.log(currentUser);

  return (
    <div className="login_page_content">
      <div className="login_page_content_content">
        <div className="login_page_container">
          <Typography className="login_page_title" variant="h5">
            LOGIN
          </Typography>
          <Typography className="login_page_label">Enter Email</Typography>
          <Input className="login_page_input" inputRef={emailRef} />
          <Typography className="login_page_label">Password</Typography>
          <Input
            type="password"
            className="login_page_input"
            inputRef={passwordRef}
          />
          <div className="login_page_button">
            <Button
              className={classes.buttonRegister}
              onClick={handleLogin}
              variant="outlined"
            >
              LOGIN
            </Button>
            <div className="login_page_other_logins">
              <FacebookButton
                startIcon={<FacebookIcon />}
                className={loginClasses.login}
                disabled={disabled}
                onClick={facebookLogin}
              >
                LOGIN WITH FACEBOOK
              </FacebookButton>
              <GmailButton
                startIcon={<MailOutlineRoundedIcon />}
                className={loginClasses.login}
                disabled={disabled}
                onClick={gmailLogin}
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
