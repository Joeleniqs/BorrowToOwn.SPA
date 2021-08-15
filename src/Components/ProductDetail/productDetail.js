import React from "react";
import { productMock } from "./productMock";

const ProductDetail = (props) => {
  console.log(productMock);
  return (
    <div>
      <h1>In Product Details</h1>
      <h2>{productMock.name}</h2>
      <img
        src={
          productMock.productImages.find((image) => image.isCoverImage).imageUrl
        }
        alt="image test"
      />
    </div>
  );
};

export default ProductDetail;
