import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { title, icon, to } = props;
  return (
    <Link
      to={to}
      className="font-headingFont md:w-72 w-40 lg:h-56 md:h-44 h-20 flex flex-col justify-center items-center bg-disabledColor rounded-xl shadow-sm hover:bg-primaryColor duration-500 p-1"
    >
      <div className="md:w-32 w-10 md:h-32 h-10 flex justify-center items-center">
        <img src={icon} alt="" className="filter brightness-50" />
      </div>
      <div className="lg:mt-4 mt-1">
        <h1 className="font-medium md:text-lg text-xs text-center">{title}</h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
