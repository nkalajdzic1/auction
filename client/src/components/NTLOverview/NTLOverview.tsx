import React, { ChangeEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../TabPanel/TabPanel";
import SmallItemCard from "../ItemCard/SmallItemCard/SmallItemCard";

import "./NTLOverview.css";

// <<<< card styles, size, etc >>>

const smallCard = makeStyles({
  root: {
    width: 250,
    maxWidth: 250,
    height: 350,
  },
  media: {
    maxWidth: 250,
    height: 250,
  },
});

// <<< helping functions >>>

function openItem() {}

// <<<<      >>>

export default function NTLOverview() {
  const smallCardclasses = smallCard();
  const [value, setValue] = useState(0);

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
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="cardContent">
              <ul>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="cardContent">
              <ul>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
                <li>
                  <div className="singleCard">
                    <SmallItemCard
                      id={1}
                      imageURL={""}
                      title={"Shoes"}
                      starting_price={10.1}
                      styles={smallCardclasses}
                      onClickF={openItem}
                    ></SmallItemCard>
                  </div>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
