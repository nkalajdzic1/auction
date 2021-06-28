import React from "react";

import fbIcon from "../../assets/icon/facebook_icon.svg";
import igIcon from "../../assets/icon/instagram_icon.svg";
import twIcon from "../../assets/icon/twitter_icon.svg";
import gpIcon from "../../assets/icon/google_plus_icon.svg";

import "./Footer.css";
import { Button, Input, makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyle = makeStyles({
  input: {
    backgroundColor: "#3B3B3B",
    color: "white",
    marginTop: "2%",
    padding: "5px 10px",
  },
  button: {
    width: "auto",
    borderColor: "#8367D8",
    borderRadius: 0,
    borderWidth: 3,
    color: "white",
    marginLeft: "2%",
    marginBottom: "1%",
    height: "fit-content",
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <p>AUCTION</p>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Terms and conditions</li>
              <li>Privacy and policy</li>
              <li style={{ fontStyle: "italic" }}>
                Page created by Nadir Kalajdžić
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <p>GET IN TOUCH</p>
            <ul className="list-unstyled">
              <li>Call us at +123 797-567-2535</li>
              <li>support@auction.com</li>
              <div className="h_col">
                <img className="ic" src={fbIcon}></img>
                <img className="ic" src={igIcon}></img>
                <img className="ic" src={twIcon}></img>
                <img className="ic" src={gpIcon}></img>
              </div>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <p>NEWSLETTER</p>
            <ul className="list-unstyled">
              <li>
                Enter your email address and get notified<br></br> about new
                products. We hate spam!
              </li>
              <li>
                <Input
                  placeholder="Your email addres"
                  className={classes.input}
                ></Input>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIosIcon />}
                  className={classes.button}
                >
                  Go
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
