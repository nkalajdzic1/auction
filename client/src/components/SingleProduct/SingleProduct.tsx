import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import SingleProductPictures from "./components/SingleProductPictures/SingleProductPictures";
import SingleProductInfo from "./components/SingleProductInfo/SingleProductInfo";
import axios from "axios";
import { ISingleAuction } from "./ISingleProduct";
import BidsList from "./components/BidsList/BidsList";

export interface ISingleProductProps {
  auction_id: number;
}

function SingleProduct({ auction_id }: ISingleProductProps) {
  const [auction, setAuction] = useState<ISingleAuction>();

  useEffect(() => {
    axios
      .get(
        "https://auctiononline.herokuapp.com/auction/single_item/" + auction_id
      )
      .then((res) => {
        setAuction(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
