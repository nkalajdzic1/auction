import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../TabPanel/TabPanel";
import SmallItemCard from "../ItemCard/SmallItemCard/SmallItemCard";

import "./NTLOverview.css";

// <<<< card styles, size, etc >>>

const smallCard = makeStyles({
  root: {
    width: 200,
    maxWidth: 200,
    height: 350,
  },
  media: {
    maxWidth: 200,
    height: 250,
  },
});

// <<< helping functions >>>

function openItem() {}

// <<<<      >>>

interface INewArrivals {
  id: number;
  item_id: number;
  user_id: number;
  startring_price: number;
  is_bearing_shipping: boolean;
  start_date: Date;
  end_date: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  item_auction_id: {
    id: number;
    name: string;
    color: string;
    size: string;
    rating: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default function NTLOverview() {
  const smallCardclasses = smallCard();
  const [value, setValue] = useState(0);
  const [newArrivals, setNewArrivals] = useState<INewArrivals[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auction/new_arrivals")
      .then((res) => setNewArrivals(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="ntlOverview">
        <div className="ntlOverviewTabs">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab className="Tab" label="New Arrivals" selected={true} />
            <Tab className="Tab" label="Top Rated" />
            <Tab className="Tab" label="Last Chance" />
          </Tabs>
        </div>
        <div className="ntlOverviewCards">
          <TabPanel value={value} index={0} className="tab1">
            <div className="cardContent">
              <ul>
                {newArrivals.map((x, i) => {
                  return (
                    <li>
                      <div className="singleCard">
                        <SmallItemCard
                          id={x.id}
                          key={i}
                          imageURL={""}
                          title={x.item_auction_id.name}
                          starting_price={x.startring_price}
                          styles={smallCardclasses}
                          onClickF={openItem}
                        ></SmallItemCard>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="cardContent">
              <ul>
                {[1, 2, 3, 4, 5, 6].map((x, i) => {
                  return (
                    <li>
                      <div className="singleCard">
                        <SmallItemCard
                          id={x}
                          key={i}
                          imageURL={""}
                          title={"Shoes"}
                          starting_price={10.1}
                          styles={smallCardclasses}
                          onClickF={openItem}
                        ></SmallItemCard>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="cardContent">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7].map((x, i) => {
                  return (
                    <li>
                      <div className="singleCard">
                        <SmallItemCard
                          id={x}
                          key={i}
                          imageURL={""}
                          title={"Shoes"}
                          starting_price={10.1}
                          styles={smallCardclasses}
                          onClickF={openItem}
                        ></SmallItemCard>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
