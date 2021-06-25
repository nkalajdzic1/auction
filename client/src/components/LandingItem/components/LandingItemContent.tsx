import { Typography } from "@material-ui/core";
import React from "react";
import ButtonCustom from "../../ButtonCustom/ButtonCustom";
import { Image } from "antd";
import "antd/dist/antd.css";

import { blobToImage } from "../../NTLOverview/NTLOverview";
import { styles } from "../Styles";
import { IAuctionIdBody } from "../../ItemCard/ItemCard";
import { useHistory } from "react-router-dom";

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
        <Typography variant="h4">{randomItem.item.name}</Typography>
        <Typography className={classes.bid} variant="h6">
          Start from $ - {randomItem.starting_price}
        </Typography>
        <div>
          <Typography className={classes.description}>
            {randomItem.item.description}
          </Typography>
          <ButtonCustom
            styles={classes}
            onClick={() => routeTo(randomItem.id)}
            content={"Bid now"}
          ></ButtonCustom>
        </div>
      </div>
      <div className="landing_item_picture">
        <Image
          width={300}
          height={300}
          src={blobToImage(randomItem.item.item_item_picture[0].picture)}
        ></Image>
      </div>
    </div>
  );
}

export default LandingItemContent;
