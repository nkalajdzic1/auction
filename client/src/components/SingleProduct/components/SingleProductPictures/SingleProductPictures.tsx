import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";
import { useStyles } from "./Styles";
import { Image } from "antd";
import "antd/dist/antd.css";

import "./SingleProductPictures.css";
import { ISingleAuction } from "../../ISingleProduct";
import { blobToImage } from "../../../NTLOverview/NTLOverview";

export interface ISingleProductPicturesProps {
  auction?: ISingleAuction;
}

function SingleProductPictures({ auction }: ISingleProductPicturesProps) {
  if (auction == null) return <div></div>;

  const classes = useStyles();
  const images = auction.item.item_item_picture;
  const [startPointImg, setStartPointImg] = useState(0);
  var main_img = images.find((x) => x.is_main_picture);
  if (main_img == null) main_img = images[0];
  const [mainImage, setMainimage] = useState(main_img);
  const [endPointImg, setEndPointImg] = useState(
    images.length < 5 ? images.length : 4
  );

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
      <Image className={classes.media} src={blobToImage(mainImage.picture)} />
      <CardContent className={classes.images}>
        <div className="images_other">
          {images.slice(startPointImg, endPointImg).map((x, i) => {
            return (
              <div className={i.toString()}>
                <Card>
                  <CardActionArea onClick={() => setMainimage(x)}>
                    <CardMedia
                      className={classes.smallImage}
                      image={blobToImage(x.picture)}
                    />
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
