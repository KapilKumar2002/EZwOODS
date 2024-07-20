import React from "react";

import AboutProfileCard from "../../components/molecules/AboutProfileCard";
function AboutPage() {
  return (
    <div className="flex justify-center items-center p-5 flex-col gap-5 container mx-auto">
      <div className="flex flex-col items-center gap-5">
        <span className="text-2xl font-semibold font-headingFont">
          About Us
        </span>
        <div className="px-20 text-center font-textFont">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          error placeat quos est et odit eius, inventore laborum, quo veritatis
          commodi, sed quasi. Dolor quidem corporis officiis magnam, dignissimos
          consectetur! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Mollitia error placeat quos est et odit eius, inventore laborum, quo
          veritatis commodi, sed quasi. Dolor quidem corporis officiis magnam,
          dignissimos consectetur!
        </div>
        <img
          className="rounded-md h-96 w-full"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
          alt=""
        />
        <div className="px-20 self-start flex flex-col gap-2">
          <span className="font-semibold text-xl my-4 font-headingFont">
            Our Misson
          </span>
          <div className="pt-3 font-textFont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero
            autem, sequi at minima, facere sint enim tempora ullam magnam fugit
            quos doloribus, nemo eaque expedita asperiores unde dolorem
            similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum vero autem, sequi at minima, facere sint enim tempora ullam
            magnam fugit quos doloribus, nemo eaque expedita asperiores unde
            dolorem similique.
          </div>
        </div>
        <div className="pt-10 text-center flex flex-col gap-5">
          {" "}
          <span className="text-2xl font-semibold ">Our Amazing Team</span>
          <div>
            Welcome to the team! We are group of passionate individuals working
            togethter to achive our goals. Get to know the faces behind our
            success.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <AboutProfileCard />
          <AboutProfileCard />
          <AboutProfileCard />
          <AboutProfileCard />
        </div>
        <div className="grid grid-cols-2 gap-20 px-20">
          <div className=" flex flex-col gap-2">
            <span className="text-2xl font-bold">Contact us</span>
            <span>
              Questions, feedback, or just want to say hello? We'd love to hear
              from you. Reach out to us via the contact form below.
            </span>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-sm">
                Name
              </label>
              <input className="border-2 rounded-md" type="text" id="name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input className="border-2 rounded-md" type="email" id="email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold text-sm">
                Message
              </label>
              <textarea
                className="border-2 rounded-md"
                type="message"
                id="message"
              />
            </div>
            <div className="flex gap-1 items-center">
              <input type="checkbox" name="accept" id="accept" />
              <span className="text-sm">I accept the Terms</span>
            </div>
            <button className="bg-primaryColor font-semibold rounded-md py-2 text-sm">
              Send message
            </button>
          </div>
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1518644730709-0835105d9daa"
            alt=""
          />
        </div>
        <div className="h-[1px] w-full bg-blue-gray-100"></div>
        <div className="flex gap-5">
          <span>Features</span>
          <span>Gallary</span>
          <span>Testimonials</span>
          <span>Pricing</span>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
