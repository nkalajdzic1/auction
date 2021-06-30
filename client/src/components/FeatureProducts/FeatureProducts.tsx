import React, { useEffect, useState } from "react";

import { Divider, makeStyles, Tab } from "@material-ui/core";
import ItemCard from "../ItemCard/ItemCard";

import "./FeatureProducts.css";
import axios from "axios";
import { IItemCard } from "../ItemList/IItemCard";
import ItemList from "../ItemList/ItemList";
import ItemListSkeleton from "../ItemList/ItemListSkeleton";

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
  font: {
    fontSize: "1.8em",
    listStyle: "none",
    fontWeight: 400,
  },
  divider: {
    width: "85%",
  },
  feature: {
    witdh: "auto",
  },
});

const mediumSkeletonCard = makeStyles({
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

function FeatureProducts() {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [items, setItems] = useState<IItemCard[]>([]);

  useEffect(() => {
    setIsLoadingData(true);

    axios
      .get("http://localhost:5000/auction/feature_products")
      .then((res) => {
        setItems(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  const mediumCardclasses = mediumCard();
  const mediumSkeletonCardclasses = mediumSkeletonCard();
  return (
    <div className="feature_products">
      <div className={mediumCardclasses.feature}>
        <li className={mediumCardclasses.font}>Feature Products</li>
        <Divider className={mediumCardclasses.divider}></Divider>
      </div>
      <div>
        <div className="cardContent">
          {!isLoadingData ? (
            <ItemList items={items} style={mediumCardclasses}></ItemList>
          ) : (
            <ItemListSkeleton
              styles={mediumSkeletonCardclasses}
              size={4}
            ></ItemListSkeleton>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
