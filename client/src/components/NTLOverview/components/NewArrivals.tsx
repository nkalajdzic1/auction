import React, { useEffect, useState } from "react";
import { IItemCard } from "./IItemCard";
import axios from "axios";
import ItemList from "./ItemList/ItemList";
import ItemListSkeleton from "./ItemList/ItemListSkeleton";

function NewArrivals() {
  const [items, setItems] = useState<IItemCard[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);

    axios
      .get("http://localhost:5000/auction/new_arrivals")
      .then((res) => {
        setItems(res.data);
        setTimeout(() => setIsLoadingData(false), 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));

    /*axios
      .get("http://localhost:5000/auction/last_chance")
      .then((res) => {
        setLastChance(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));*/
  }, []);

  return (
    <div className="cardContent">
      {isLoadingData ? (
        <ItemListSkeleton></ItemListSkeleton>
      ) : (
        <ItemList items={items}></ItemList>
      )}
    </div>
  );
}

export default NewArrivals;
