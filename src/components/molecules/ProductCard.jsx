import React from "react";
import { GrFavorite } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";

const ProductCard = (props) => {
  const { product, className } = props;
  return (
    <div
      className={`h-96 relative p-4 bg-disabledColor rounded-xl ${className} hover:bg-secondaryColor duration-700 font-headingFont font-medium`}
    >
      <img
        src={product.image}
        alt=""
        className={`h-full w-full object-contain`}
      />
      <div className="absolute top-5 left-5 text-4xl">
        <GrFavorite />
      </div>
      <div className="absolute bottom-5 right-5 h-14 w-14 rounded-full bg-primaryColor flex justify-center items-center shadow-md">
        <LuShoppingCart className=" text-2xl" />
      </div>

      <div className="absolute bottom-5">
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
