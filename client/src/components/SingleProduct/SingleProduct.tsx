import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import SingleProductPictures from "./components/SingleProductPictures/SingleProductPictures";
import SingleProductInfo from "./components/SingleProductInfo/SingleProductInfo";
import axios from "axios";
import { ISingleAuction } from "./ISingleProduct";
import BidsList from "./components/BidsList/BidsList";
import { TMBD_API_URL } from "../../const";

export interface ISingleProductProps {
  auction_id: number;
}

function SingleProduct({ auction_id }: ISingleProductProps) {
  const [auction, setAuction] = useState<ISingleAuction>();

  useEffect(() => {
    axios
      .get(`${TMBD_API_URL}/auction/single_item/` + auction_id)
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
