import React, { useEffect, useState } from "react";

import { Divider } from "@material-ui/core";

import "./FeatureProducts.css";
import { IItemCard } from "../ItemList/IItemCard";
import ItemList from "../ItemList/ItemList";
import ItemListSkeleton from "../ItemList/ItemListSkeleton";
import { getFeatureProducts } from "../../api/products";
import { mediumCard, mediumSkeletonCard } from "./Styles";

function FeatureProducts() {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [items, setItems] = useState<IItemCard[]>([]);

  useEffect(() => {
    setIsLoadingData(true);

    getFeatureProducts()
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
        <li className="feature_products_title">Feature Products</li>
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
