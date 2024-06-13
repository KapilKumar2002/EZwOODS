import React from "react";
import CategoryCard from "../../components/molecules/CategoryCard";
import { categoryItems } from "../../utils/constants/Constants";

const HomePage = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center gap-5">
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            key={index}
            icon={categoryItem.img}
            title={categoryItem.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
