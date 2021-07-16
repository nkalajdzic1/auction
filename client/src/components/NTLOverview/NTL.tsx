import React, { useEffect, useState } from "react";
import { IItemCard } from "../ItemList/IItemCard";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import ItemListSkeleton from "../ItemList/ItemListSkeleton";
import { TMBD_API_URL } from "../../const";
import { getNTL } from "../../api/products";

export interface ILastChanceProps {
  route: string;
}

function LastChance({ route }: ILastChanceProps) {
  const [items, setItems] = useState<IItemCard[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);

    getNTL(route)
      .then((res) => {
        setItems(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch(() => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  return (
    <div className="cardContent">
      {isLoadingData ? (
        <ItemListSkeleton size={8}></ItemListSkeleton>
      ) : (
        <ItemList items={items}></ItemList>
      )}
    </div>
  );
}

export default LastChance;
