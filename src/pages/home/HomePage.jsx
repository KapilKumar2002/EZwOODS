import React, { useState } from "react";
import CategoryCard from "../../components/molecules/CategoryCard";
import { Products, categoryItems } from "../../utils/constants/Constants";
import ProductCard from "../../components/molecules/ProductCard";
import Title from "../../components/atoms/Title";
import carousel1 from "../../assets/carousel1.png";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 hidden bg-disabledColor hover:bg-black duration-300 rounded-full text-2xl text-gray-400 md:flex justify-center items-center absolute bottom-10 right-10 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 hidden bg-disabledColor hover:bg-black duration-300 rounded-full text-2xl text-gray-400 md:flex justify-center items-center absolute bottom-10 right-32 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const HomePage = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {" "}
        {dots}{" "}
      </ul>
    ),
    customPaging: (i) => (
      <div
        className={`w-10 h-1 rounded-full ${
          i === dotActive ? "bg-primaryColor" : "bg-disabledColor"
        } cursor-pointer`}
      ></div>
    ),
  };
  const slides = [
    { image: carousel1 },
    { image: carousel1 },
    { image: carousel1 },
  ];
  return (
    <div className="flex flex-col gap-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="md:h-[450px] h-64 cursor-pointer outline-none">
            <img
              src={slide.image}
              alt=""
              className="h-full w-full rounded-xl outline-none"
            />
          </div>
        ))}
      </Slider>
      <div className="max-container flex flex-col gap-10">
        <div className="flex justify-center md:gap-5 gap-1">
          {categoryItems.map((categoryItem, index) => (
            <CategoryCard
              key={index}
              to={categoryItem.to}
              icon={categoryItem.img}
              title={categoryItem.title}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <Title title={"Featured Sofas"} />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-2">
            {Products.map(
              (product, index) =>
                index < 6 && (
                  <ProductCard
                    product={product}
                    className={index % 4 === 0 && `lg:col-span-2`}
                  />
                )
            )}
          </div>
          <div className="px-4 py-2 bg-disabledColor hover:bg-primaryColor self-end duration-700">
            <h1 className="font-buttonFont font-medium">View All</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
