import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const CartItemCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <div className="h-14 w-14 flex justify-center items-center">
          <RxCross2 className="w-14" />
        </div>
        <div className="flex mt-4 gap-5 w-full">
          <div className="w-full flex gap-8">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
              alt="furniture.jpeg"
              className="w-80 h-52"
            />
            <div className="">
              <span className="font-semibold text-lg">New Table Set</span>
              <div className="flex flex-col mt-5 text-sm gap-1 text-gray-400">
                <span>Ducale Fabric</span>
                <span>Ducale Deep Royal</span>
                <span>Production Time: 14ms</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-evenly font-headingFont">
            <div className="flex items-center justify-center h-min">
              <FiMinus className="hover:cursor-pointer" />
              <span className="px-3 font-semibold">1</span>
              <FaPlus className="hover:cursor-pointer" />
            </div>
            <span className="font-semibold text-lg">$11999</span>
          </div>
        </div>
      </div>
      <div className="h-[4px] mt-2 bg-black  border rounded-sm"></div>
    </div>
  );
};

export default CartItemCard;
