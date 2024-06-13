import React from "react";

const CategoryCard = (props) => {
  const { title, icon } = props;
  return (
    <div className="font-headingFont w-72 h-56 flex flex-col justify-center items-center bg-disabledColor rounded-xl shadow-sm hover:bg-primaryColor duration-500">
      <div className="  w-32 h-32 ">
        <img src={icon} alt="" className="filter brightness-50" />
      </div>
      <div className="mt-4">
        <h1 className="font-medium">{title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
