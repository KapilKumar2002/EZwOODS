import React from "react";
import { FilterBar } from "../../components/molecules/FilterBar";

const ProductPage = () => {
  return (
    <div className="flex">
      <div className="w-96">
        <FilterBar />
      </div>
      <div></div>
    </div>
  );
};

export default ProductPage;
