import React from "react";
import Page from "../../components/Page/Page";
import NTLOverview from "../../components/NTLOverview/NTLOverview";

import "./LandingPage.css";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import CategoriesOverview from "../../components/CategoriesOverview/CategoriesOverview";
import LandingItem from "../../components/LandingItem/LandingItem";

const LandingPage = () => {
  return (
    <Page>
      <div className="categories_item">
        <CategoriesOverview></CategoriesOverview>
        <LandingItem></LandingItem>
      </div>
      <FeatureProducts></FeatureProducts>
      <NTLOverview></NTLOverview>
    </Page>
  );
};

export default LandingPage;
