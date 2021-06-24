import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import SingleProductPictures from "./components/SingleProductPictures/SingleProductPictures";
import SingleProductInfo from "./components/SingleProductInfo/SingleProductInfo";
import axios from "axios";
import { ISingleAuction } from "./ISingleProduct";

export interface ISingleProductProps {
  auction_id: number;
}

function SingleProduct({ auction_id }: ISingleProductProps) {
  const [auction, setAuction] = useState<ISingleAuction>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/auction/single_item/" + auction_id)
      .then((res) => {
        setAuction(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single_product_content">
      <SingleProductPictures auction={auction}></SingleProductPictures>
      <SingleProductInfo auction={auction}></SingleProductInfo>
    </div>
  );
}

export default SingleProduct;