import React from "react";
import { GrFavorite } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product, className, to } = props;
  return (
    <Link
      to={"/product"}
      className={`max-h-80 relative p-4 bg-disabledColor rounded-xl ${className} hover:bg-secondaryColor duration-700 font-headingFont font-medium`}
    >
      <img
        src={product.image}
        alt=""
        className={`h-full w-full object-contain`}
      />
      <div className="absolute top-5 left-5 lg:text-4xl text-2xl">
        <GrFavorite />
      </div>
      <div className="absolute lg:bottom-5 top-5 right-5 lg:h-14 lg:w-14 w-10 h-10 rounded-full bg-primaryColor flex justify-center items-center shadow-md">
        <LuShoppingCart className="lg:text-2xl text-xl" />
      </div>

      <div className="absolute bottom-5">
        <h1>{product.name}</h1>
        <h1 className="md:text-lg text-xs">{product.price}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
