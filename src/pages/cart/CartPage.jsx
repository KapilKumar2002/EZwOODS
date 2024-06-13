import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import CartItemCard from "../../components/molecules/CartItemCard";
import { Link } from "react-router-dom";
const CartPage = () => {
  return (
    <div className="px-5 my-6">
      <Link
        to={"/"}
        className="font-textFont flex justify-start items-center gap-3 hover:cursor-pointer text-sm mt-10"
      >
        <FaArrowLeft /> <span className="">BACK TO SHOPPING</span>
      </Link>
      <h1 className="font-medium font-headingFont text-3xl text-center mb-10">
        SHOPPING CART
      </h1>
      {/* <div className="flex justify-between">
        <span>PRODUCT</span>
        <div>
          <span>QUANTITY</span>
          <span>PRICE</span>
        </div>
      </div> */}
      <div className="flex font-headingFont">
        <span className="pl-14 w-full flex items-center">PRODUCT</span>

        <div className="w-1/2 flex justify-evenly">
          <span>QUANTITY</span>
          <span>PRICE</span>
        </div>
      </div>
      <div className="h-[4px] mt-2 bg-black  border rounded-sm"></div>
      <div>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </div>
    </div>
  );
};

export default CartPage;
