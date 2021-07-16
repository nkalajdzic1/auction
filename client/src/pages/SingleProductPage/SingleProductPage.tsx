import React from "react";
import { useLocation } from "react-router-dom";
import { IAuctionIdBody } from "../../components/ItemCard/ItemCard";
import Page from "../../components/Page/Page";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import SingleProductHeader from "../../components/SingleProductHeader/SingleProductHeader";
import Page404 from "../Page404/Page404";

function SingleProductPage() {
  return (
    <Page>
      <SingleProductHeader></SingleProductHeader>
      <SingleProduct></SingleProduct>
    </Page>
  );
}

export default SingleProductPage;
