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
      .get("http://localhost:5000/auction/count_auction_rows")
      .then((res) => {
        const rndInt = Math.floor(Math.random() * res.data) + 1;
        axios
          .get("http://localhost:5000/auction/random_item/" + rndInt)
          .then((res2) => {
            console.log(res2.data);
            setItem(res2.data);

            setTimeout(() => {
              setIsLoadingData(false);
            }, 500);
          })
          .catch((err1) => setTimeout(() => setIsLoadingData(false), 500));
      })
      .catch((err) => setTimeout(() => setIsLoadingData(false), 500));
  }, []);

  return <LandingItemContent randomItem={item}></LandingItemContent>;
}

export default LandingItem;
