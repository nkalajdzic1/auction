import { makeStyles, Tab } from "@material-ui/core";
import React from "react";
import ItemCard from "../ItemCard//ItemCard";

import "./FeatureCollection.css";

// <<<< card styles, size, etc >>>

const bigCard = makeStyles({
  root: {
    width: 250,
    maxWidth: 250,
    height: 350,
  },
  media: {
    maxWidth: 250,
    height: 250,
  },
});

// <<< helping functions >>>

function openItem() {}

// <<<<      >>>

function FeatureCollection() {
  const bigCardclasses = bigCard();
  return (
    <div className="feature_collection">
      <Tab label="Feature Collection" disabled />
      <div>
        <div className="cardContent">
          <ul>
            {[1, 2, 3].map((x, i) => {
              return (
                <li>
                  <div className="singleCard">
                    <ItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={bigCardclasses}
                    ></ItemCard>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeatureCollection;
