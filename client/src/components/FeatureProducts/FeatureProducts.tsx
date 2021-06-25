import React, { useEffect, useState } from "react";

import { makeStyles, Tab } from "@material-ui/core";
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
  return (
    <div className="feature_products">
      <Tab label="Feature Products" disabled />
      <div>
        <div className="cardContent">
          {!isLoadingData ? (
            <ItemList items={items} style={mediumCardclasses}></ItemList>
          ) : (
            <ItemListSkeleton size={4}></ItemListSkeleton>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
