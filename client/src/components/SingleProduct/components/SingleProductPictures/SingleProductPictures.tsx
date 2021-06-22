import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img from "./dress1_img1.jpg"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Button } from '@material-ui/core';
import { useStyles } from './Styles';

function SingleProductPictures() {
    const classes = useStyles();
    const [images, setImages] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [startPointImg, setStartPointImg] = useState(0);
    const [endPointImg, setEndPointImg] = useState(4);
    
    function next() {
        if(images.length <= 4) return
        if(JSON.stringify(endPointImg) == (images.length).toString()) return
        setStartPointImg(startPointImg + 1)
        setEndPointImg(endPointImg + 1)
    }

    function previous() {
      if(images.length <= 4) return
      if(JSON.stringify(startPointImg) == (0).toString()) return
      setStartPointImg(startPointImg - 1)
      setEndPointImg(endPointImg - 1)
    }

    return (
        <div className="single_product_pictures">
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={img}
              title=""
            />
            <CardContent className={classes.images}>
              
              {images.slice(startPointImg, endPointImg).map((x, i) => {
                  return (
                  <CardActionArea className={classes.smallImage}>
                  {x}
                </CardActionArea>
              )})
              }
              </CardContent>
          </Card>
          <div className="arrows">
              <Button className={classes.arrow} onClick={previous} startIcon={<ArrowBackIosIcon/>}></Button>
              <Button className={classes.arrow} onClick={next} startIcon={<ArrowForwardIosIcon/>}></Button>
          </div>
        </div>
    )
}

export default SingleProductPictures
