import React, { ChangeEvent, useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../TabPanel/TabPanel";
import "./NTLOverview.css";
import NTL from "./components/NTL/NTL";

// <<<< card styles, size, etc >>>

// <<< helping functions >>>
function openItem() {}

export function blobToImage(picData: any) {
  var blob = new Blob([new Uint8Array(picData.data)], { type: picData.type });
  return URL.createObjectURL(blob);
}

// <<<<      >>>

export default function NTLOverview() {
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
            <NTL route={"new_arrivals"}></NTL>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <NTL route={"top_rated"}></NTL>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <NTL route={"last_chance"}></NTL>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
