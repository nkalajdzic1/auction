import React, { useState } from 'react'
import "./SingleProduct.css";
import SingleProductPictures from './components/SingleProductPictures/SingleProductPictures';

function SingleProduct() {
   
  return (
    <div className="single_product_content">
      <SingleProductPictures></SingleProductPictures>
    </div>
  );
}

export default SingleProduct
