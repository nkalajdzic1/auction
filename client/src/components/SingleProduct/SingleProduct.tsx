import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import SingleProductPictures from "./components/SingleProductPictures/SingleProductPictures";
import SingleProductInfo from "./components/SingleProductInfo/SingleProductInfo";

export interface ISingleProductProps {
  auction_id: number;
}

function SingleProduct({ auction_id }: ISingleProductProps) {
  const [auction, setAuction] = useState();

  useEffect(() => {}, []);

  return (
    <div className="single_product_content">
      <SingleProductPictures></SingleProductPictures>
      <SingleProductInfo></SingleProductInfo>
    </div>
  );
}

export default SingleProduct;
