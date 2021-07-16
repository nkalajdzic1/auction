import React, { useEffect, useState } from "react";

import "./LandingItem.css";
import LandingItemContent, {
  IRandomItem,
} from "./components/LandingItemContent";
import { getRandomItem } from "../../api/products";

function LandingItem() {
  const [item, setItem] = useState<IRandomItem>();
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);
    getRandomItem()
      .then((res) => {
        setItem(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch(() => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  return <LandingItemContent randomItem={item}></LandingItemContent>;
}

export default LandingItem;
