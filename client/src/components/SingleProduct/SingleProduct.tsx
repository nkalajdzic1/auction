import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import SingleProductPictures from "./components/SingleProductPictures/SingleProductPictures";
import SingleProductInfo from "./components/SingleProductInfo/SingleProductInfo";
import { ISingleAuction } from "./ISingleProduct";
import BidsList from "./components/BidsList/BidsList";
import { getSingleItem } from "../../api/products";
import { useHistory, useLocation } from "react-router-dom";
import { IAuctionIdBody } from "../ItemCard/ItemCard";

export interface ISingleProductProps {
  auction_id: number;
}

function SingleProduct() {
  const location = useLocation<IAuctionIdBody>();
  const history = useHistory();
  const [auction, setAuction] = useState<ISingleAuction>();

  if (location.state == null || location.state.auction_id == null)
    history.push("/404");

  useEffect(() => {
    getSingleItem(location.state.auction_id)
      .then((res) => {
        setAuction(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="single_product_container">
      <div className="single_product_content">
        <SingleProductPictures auction={auction}></SingleProductPictures>
        <SingleProductInfo auction={auction}></SingleProductInfo>
      </div>
      <div className="bids_list">
        <BidsList auction={auction}></BidsList>
      </div>
    </div>
  );
}

export default SingleProduct;
