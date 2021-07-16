import { Typography, Button } from "@material-ui/core";
import React from "react";
import { Image } from "antd";
import "antd/dist/antd.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { blobToImage } from "../../NTLOverview/NTLOverview";
import { styles } from "../Styles";
import { IAuctionIdBody } from "../../ItemCard/ItemCard";
import { useHistory } from "react-router-dom";

import "./LandingItemContent.css";
import Paragraph from "antd/lib/typography/Paragraph";

export interface IRandomItem {
  id: number;
  starting_price: number;
  item: {
    name: string;
    description: string;
    item_item_picture: [
      {
        picture: {
          type: string;
          data: any;
        };
      }
    ];
  };
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export interface ILandingItemContent {
  randomItem?: IRandomItem;
}

function LandingItemContent({ randomItem }: ILandingItemContent) {
  if (randomItem == null || randomItem == undefined) return <div></div>;

  const classes = styles();
  const history = useHistory();

  function routeTo(id: number) {
    var body: IAuctionIdBody = {
      auction_id: id,
    };
    history.push({
      pathname: "/single_product",
      state: body,
    });
  }

  return (
    <div className="landing_item">
      <div className="landing_item_info">
        <div className="landing_item_name">
          <Typography className="root" variant="h4">
            {randomItem.item.name}
          </Typography>
        </div>
        <div className="landing_item_bidding">
          <Typography className="landing_item_bid" variant="h6">
            Start from - ${randomItem.starting_price}
          </Typography>
        </div>
        <div className="ladning_item_description">
          <Paragraph
            className="ladning_item_desc"
            ellipsis={{ rows: 4, expandable: false }}
            style={
              getWindowDimensions().width >= 900 ? {} : { textAlign: "center" }
            }
          >
            {randomItem.item.description}
          </Paragraph>
        </div>
      </div>
      <div className="landing_item_picture">
        <Image
          width={300}
          height={300}
          className="landing_item_image"
          src={blobToImage(randomItem.item.item_item_picture[0].picture)}
        ></Image>
      </div>
      <div className="landing_item_button">
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
          className={classes.buttonBid}
          onClick={() => routeTo(randomItem.id)}
        >
          Bid now
        </Button>
      </div>
    </div>
  );
}

export default LandingItemContent;
