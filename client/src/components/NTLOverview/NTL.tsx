import React, { useEffect, useState } from "react";
import { IItemCard } from "../ItemList/IItemCard";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import ItemListSkeleton from "../ItemList/ItemListSkeleton";
import { TMBD_API_URL } from "../../const";

export interface ILastChanceProps {
  route: string;
}

function LastChance({ route }: ILastChanceProps) {
  const [items, setItems] = useState<IItemCard[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);

    axios
      .get(`${TMBD_API_URL}/auction/` + route)
      .then((res) => {
        setItems(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));
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
