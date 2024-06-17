import React from "react";
import { FilterBar } from "../../components/molecules/FilterBar";
import { Card } from "@material-tailwind/react";
import carousel1 from "../../assets/carousel1.png";
import Title from "../../components/atoms/Title";

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Card className="h-80">
        <img src={carousel1} alt="" className="rounded-lg h-full" />
      </Card>
      <div className="flex gap-10">
        <FilterBar />
        <div>
          <div>
            <Title title={"Dining Table"} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
