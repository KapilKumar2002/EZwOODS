import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
const CartPage = () => {
  return (
    <div className="px-5">
      <div className="flex justify-start items-center gap-1 hover:cursor-pointer">
        <FaArrowLeft /> <span className="font-semibold">BACK TO SHOPPING</span>
      </div>
      <h1 className="font-semibold text-5xl text-center mb-10">
        SHOPPING CART
      </h1>
      {/* <div className="flex justify-between">
        <span>PRODUCT</span>
        <div>
          <span>QUANTITY</span>
          <span>PRICE</span>
        </div>
      </div> */}
      <div className="flex justify-around">
        <span>PRODUCT</span>
        <span className=""></span>
        <span>QUANTITY</span>
        <span>PRICE</span>
      </div>
      <div className="h-[4px] mt-2 bg-black  border rounded-sm"></div>
      <div className="grid grid-cols-4  mt-4 gap-5 ">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
          alt="furniture.jpeg"
        />
        <div>
          <span className="font-semibold text-lg">New Table Set</span>
          <div className="flex flex-col mt-5 text-sm gap-1 text-gray-400">
            <span>Ducale Fabric</span>
            <span>Ducale Deep Royal</span>
            <span>Production Time: 14ms</span>
          </div>
        </div>
        <div className="flex justify-center">
          <FiMinus className="hover:cursor-pointer" />
          <span className="px-3 font-semibold">1</span>
          <FaPlus className="hover:cursor-pointer" />
        </div>
        <span className="font-semibold text-lg">$11999</span>
      </div>
    </div>
  );
};

export default CartPage;
