import React from "react";
import CategoryCard from "../../components/molecules/CategoryCard";

const HomePage = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center gap-5">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default HomePage;
