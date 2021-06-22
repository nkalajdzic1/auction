import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import NTLOverview from "../../components/NTLOverview/NTLOverview";

import "./LandingPage.css";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import FeatureCollection from "../../components/FeatureCollection/FeatureCollection";
import CategoriesOverview from "../../components/CategoriesOverview/CategoriesOverview";

const LandingPage = () => {
  return (
    <Page>
      <div className="categories_item">
      <CategoriesOverview></CategoriesOverview>
      </div>
      <FeatureCollection></FeatureCollection>
      <FeatureProducts></FeatureProducts>
      <NTLOverview></NTLOverview>
    </Page>
  );
};

export default LandingPage;
