import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import NTLOverview from "../../components/NTLOverview/NTLOverview";

import "./LandingPage.css";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import FeatureCollection from "../../components/FeatureCollection/FeatureCollection";

const LandingPage = () => {
  return (
    <Page>
      <FeatureCollection></FeatureCollection>
      <FeatureProducts></FeatureProducts>
      <NTLOverview></NTLOverview>
    </Page>
  );
};

export default LandingPage;
