import React from "react";
import CategoryCard from "../../components/molecules/CategoryCard";
import { Products, categoryItems } from "../../utils/constants/Constants";
import ProductCard from "../../components/molecules/ProductCard";

const HomePage = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <div className="flex justify-center gap-5">
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            key={index}
            icon={categoryItem.img}
            title={categoryItem.title}
          />
        ))}
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="h-10 w-4 bg-primaryColor rounded-md"></div>
          <h1 className="text-xl font-semibold font-headingFont">
            Featured Sofas
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {Products.map(
            (product, index) =>
              index < 9 && (
                <ProductCard
                  product={product}
                  className={index % 4 === 0 && `col-span-2`}
                />
              )
          )}
        </div>
        <div className="px-4 py-2 bg-disabledColor hover:bg-primaryColor self-end duration-700">
          <h1 className="font-buttonFont font-medium">View All</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
