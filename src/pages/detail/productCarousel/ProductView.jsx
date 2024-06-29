import React, { useState } from "react";
import RatingReadOnly from "../../../components/atoms/RatingReadOnly";
import ProductTabs from "../../../components/atoms/ProductTabs";


const ProductView = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-16 ">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-3 w-[50%]">
        <span className="text-5xl font-bold">Sofa</span>
        <div className="flex  items-center gap-2 font-semibold text-sm">
          <span className="">230 Sold &#x2022; 4.8 </span>
          <RatingReadOnly defaultValue={2.5} />
        </div>
        <span className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          tenetur, vitae eveniet architecto maiores totam error dolorum labore
          itaque porro doloribus voluptatibus magnam iure quos obcaecati!
          Reprehenderit inventore aliquam modi.
        </span>
        <ProductTabs></ProductTabs>
        <span className="text-lg font-bold">Model</span>
        <ul className="pl-5">
          <li className="list-disc">W70 x D80 x H85 cm</li>
        </ul>
        <span className="text-lg font-bold mt-2">Details</span>
        <ul className="pl-5 text-sm">
          <li className="list-disc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            sequi corporis debitis tempora repellat?
          </li>
          <li className="list-disc">Lorem ipsum, dolor sit amet consectetur</li>
          <li className="list-disc">
            {" "}
            Lorem ipsum, dolor sit amet consectetur
          </li>
          <li className="list-disc">
            {" "}
            Lorem ipsum, dolor sit amet consectetur
          </li>
        </ul>
        <span className="text-lg font-bold mt-2">Additional Info</span>
        <div className="flex divide-x-2">
          <span className="text-sm pr-2">
            Arm Weight: <b>54 cm</b>
          </span>
          <span className="text-sm px-2">
            Arm Weight: <b>54 cm</b>
          </span>
          <span className="text-sm px-2">
            Arm Weight: <b>54 cm</b>
          </span>
        </div>
        <span className="text-lg font-bold mt-2">Colors</span>
        <div class="flex space-x-1">
          <div class="flex items-center justify-center w-8 h-8 bg-white border-2 border-red-700 rounded-full">
            <div class="w-6 h-6 bg-red-500 rounded-full"></div>
          </div>
          <div class="flex items-center justify-center w-8 h-8 bg-white border-2 hover:border-green-700 rounded-full">
            <div class="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </div>
          <div class="bg-white shadow-lg rounded-md p-4 w-full max-w-lg">
            <div class="flex justify-between items-center mb-4 gap-6">
            <div><span className="text-sm">Price</span>
            <div class="text-2xl font-semibold">$99.99</div></div>
              <button class="bg-black text-white px-4 py-3 text-sm rounded-3xl w-full flex items-center justify-center">
                Shop Now
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  ></path>
                </svg>
              </button>
            </div>
              <div class="flex justify-between">
                <button class="bg-gray-200 text-gray-800 px-5 py-2 rounded-3xl flex items-center">
                  Customize
                </button>
                <button class="bg-gray-200 text-gray-800 px-3 py-2 rounded-3xl flex items-center">
                  Favorites
                </button>
                <button class="bg-gray-200 text-gray-800 px-3 py-2 rounded-3xl flex items-center">
                  Share
                </button>
              </div>
          </div>
        </div>
      </div>
  );
};

export default ProductView;
