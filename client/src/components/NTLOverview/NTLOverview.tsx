import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../TabPanel/TabPanel";
import ItemCard from "../ItemCard/ItemCard";

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

function blobToImage(picData: any) {
  var blob = new Blob([new Uint8Array(picData.data)], { type: picData.type });
  return URL.createObjectURL(blob);
}

// <<<<      >>>

interface IItemCard {
  id: number;
  item_id: number;
  user_id: number;
  starting_price: number;
  item: {
    name: string;
    item_item_picture: [
      {
        picture: {
          type: string;
          data: any;
        };
      }
    ];
  };
}

export default function NTLOverview() {
  const smallCardclasses = smallCard();
  const [value, setValue] = useState(0);
  const [newArrivals, setNewArrivals] = useState<IItemCard[]>([]);
  const [lastChance, setLastChance] = useState<IItemCard[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auction/new_arrivals")
      .then((res) => setNewArrivals(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/auction/last_chance")
      .then((res) => setLastChance(res.data))
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
                    <li id={x.id.toString()}>
                      <div className="singleCard">
                        <ItemCard
                          id={x.id}
                          key={i}
                          imageURL={blobToImage(
                            x.item.item_item_picture[0].picture
                          )}
                          title={x.item.name}
                          starting_price={x.starting_price}
                          styles={smallCardclasses}
                          onClickF={openItem}
                        ></ItemCard>
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
                        <ItemCard
                          id={x}
                          key={i}
                          imageURL={""}
                          title={"Shoes"}
                          starting_price={10.1}
                          styles={smallCardclasses}
                          onClickF={openItem}
                        ></ItemCard>
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
                {lastChance.map((x, i) => {
                  return (
                    <li id={x.id.toString()}>
                      <div className="singleCard">
                        <ItemCard
                          id={x.id}
                          key={i}
                          imageURL={blobToImage(
                            x.item.item_item_picture[0].picture
                          )}
                          title={x.item.name}
                          starting_price={x.starting_price}
                          styles={smallCardclasses}
                          onClickF={openItem}
                        ></ItemCard>
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
