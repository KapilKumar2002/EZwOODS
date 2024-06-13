import React from "react";

const CategoryCard = () => {
  return (
    <div className="w-72 h-56 flex flex-col justify-center items-center bg-disabledColor rounded-xl shadow-sm hover:bg-primaryColor duration-500">
      <div className="w-32 h-32 "></div>
      <div className="mt-4">
        <h1 className="font-medium">Chairs</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
