import React, { useState } from "react";
import Slider from "react-slick";
import carousel1 from "../../../assets/carousel1.png";

const ProductView = () => {
  const [amount, setAmount] = useState(1);

  const slides = [
    { image: carousel1 },
    { image: carousel1 },
    { image: carousel1 },
  ];
  // const [activeImg, setActiveImage] = useState(images.img1);

  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          height: "120px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="flex md:gap-20 gap-14">{dots}</div>
      </div>
    ),
    customPaging: (i) => (
      <div className="md:w-24 w-20 absolute -translate-x-[50%] left-[50%] flex justify-center items-center">
        <img
          src={slides[i].image}
          alt=""
          className={`md:h-24 h-20 md:w-24 w-20 object-cover rounded-md ${
            i == dotActive ? "border-2 border-white" : ""
          }`}
        />
      </div>
    ),
  };

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <Slider className="w-full" {...settings}>
          {slides.map((slide, index) => (
            <div className="md:h-[550px] h-96 w-full outline-none duration-500">
              <img
                src={slide.image}
                alt=""
                className="md:h-[450px] h-72 w-full object-cover rounded-xl  aspect-square duration-700"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
        </div>
        <p className="text-gray-700">
          Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
