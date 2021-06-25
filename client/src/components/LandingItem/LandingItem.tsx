import React, { useEffect, useState } from "react";

import "./LandingItem.css";
import { styles } from "./Styles";
import axios from "axios";
import LandingItemContent, {
  IRandomItem,
} from "./components/LandingItemContent";

function LandingItem() {
  const [item, setItem] = useState<IRandomItem>();
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);
    axios
      .get("http://localhost:5000/auction/random_item")
      .then((res) => {
        setItem(res.data);
        setTimeout(() => {
          setIsLoadingData(false);
        }, 500);
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  return <LandingItemContent randomItem={item}></LandingItemContent>;
}

export default LandingItem;
