import { makeStyles, Tab } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard//ItemCard";
import { IItemCard } from "../ItemList/IItemCard";
import ItemList from "../ItemList/ItemList";
import ItemListSkeleton from "../ItemList/ItemListSkeleton";
import { blobToImage } from "../NTLOverview/NTLOverview";

import "./FeatureCollection.css";

const bigCard = makeStyles({
  root: {
    width: 1035 / 3,
    maxWidth: "100%",
    height: 500,
  },
  media: {
    maxWidth: "100%",
    height: 400,
  },
});

function FeatureCollection() {
  const [items, setItems] = useState<IItemCard[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);
    axios
      .get("http://localhost:5000/auction/feature_collection")
      .then((res) => {
        setItems(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  const bigCardclasses = bigCard();
  return (
    <div className="feature_collection">
      <Tab label="Feature Collection" disabled />
      <div>
        <div className="cardContent">
          {!isLoadingData ? (
            <ItemList items={items} style={bigCardclasses}></ItemList>
          ) : (
            <ItemListSkeleton
              styles={bigCardclasses}
              size={3}
            ></ItemListSkeleton>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureCollection;
