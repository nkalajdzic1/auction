import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import img from "./dress1_img1.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";

import "./SingleProductPictures.css";

function SingleProductPictures() {
  const classes = useStyles();
  const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [startPointImg, setStartPointImg] = useState(0);
  const [endPointImg, setEndPointImg] = useState(4);

  function next() {
    if (images.length <= 4) return;
    if (JSON.stringify(endPointImg) == images.length.toString()) return;
    setStartPointImg(startPointImg + 1);
    setEndPointImg(endPointImg + 1);
  }

  function previous() {
    if (images.length <= 4) return;
    if (JSON.stringify(startPointImg) == (0).toString()) return;
    setStartPointImg(startPointImg - 1);
    setEndPointImg(endPointImg - 1);
  }

  return (
    <div className="single_product_pictures">
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={img} title="" />
      </Card>
      <CardContent className={classes.images}>
        <div className="images_other">
          {images.slice(startPointImg, endPointImg).map((x, i) => {
            return (
              <div className={i.toString()}>
                <Card>
                  <CardActionArea>
                    <CardMedia className={classes.smallImage} image={img}>
                      {x}
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </CardContent>
      <div className="arrows">
        <div className="arrow_previous">
          <Button
            disabled={images.length <= 4}
            className={classes.arrow}
            variant="outlined"
            onClick={previous}
          >
            <ArrowBackIcon />
          </Button>
        </div>
        <div className="arrow_next">
          <Button
            disabled={images.length <= 4}
            className={classes.arrow}
            variant="outlined"
            onClick={next}
          >
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPictures;
