import React from "react";

import { makeStyles, Tab } from "@material-ui/core";
import SmallItemCard from "../ItemCard/SmallItemCard/SmallItemCard";

import "./FeatureProducts.css";

// <<<< card styles, size, etc >>>

const mediumCard = makeStyles({
  root: {
    width: 250,
    maxWidth: 250,
    height: 450,
  },
  media: {
    maxWidth: 250,
    height: 350,
  },
});

// <<< helping functions >>>

function openItem() {}

// <<<<      >>>

function FeatureProducts() {
  const mediumCardclasses = mediumCard();
  return (
    <div className="feature_products">
      <Tab label="Feature Products" disabled />
      <div>
        <div className="cardContent">
          <ul>
            <li>
              <div className="singleCard">
                <SmallItemCard
                  id={1}
                  imageURL={""}
                  title={"Shoes"}
                  starting_price={10.1}
                  styles={mediumCardclasses}
                  onClickF={openItem}
                ></SmallItemCard>
              </div>
            </li>
            <li>
              <div className="singleCard">
                <SmallItemCard
                  id={1}
                  imageURL={""}
                  title={"Shoes"}
                  starting_price={10.1}
                  styles={mediumCardclasses}
                  onClickF={openItem}
                ></SmallItemCard>
              </div>
            </li>
            <li>
              <div className="singleCard">
                <SmallItemCard
                  id={1}
                  imageURL={""}
                  title={"Shoes"}
                  starting_price={10.1}
                  styles={mediumCardclasses}
                  onClickF={openItem}
                ></SmallItemCard>
              </div>
            </li>
            <li>
              <div className="singleCard">
                <SmallItemCard
                  id={1}
                  imageURL={""}
                  title={"Shoes"}
                  starting_price={10.1}
                  styles={mediumCardclasses}
                  onClickF={openItem}
                ></SmallItemCard>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;