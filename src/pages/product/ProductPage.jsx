import React from "react";
import { FilterBar } from "../../components/molecules/FilterBar";
import { Card } from "@material-tailwind/react";
import carousel1 from "../../assets/carousel1.png";
import Title from "../../components/atoms/Title";
import CatalogList from "./catalogGrid/CatalogGrid";

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Card className="h-80">
        <img src={carousel1} alt="" className="rounded-lg h-full" />
      </Card>
      <div className="flex lg:flex-row flex-col gap-10">
        <FilterBar />
        <div className="flex flex-col gap-10">
          <div>
            <Title title={"Dining Tables"} />
          </div>
          <CatalogList />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
