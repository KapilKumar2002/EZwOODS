import React from "react";
import Card from "@mui/material/Card";

import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
function AboutProfileCard() {
  return (
    <Card className="flex flex-col justify-center items-center p-5 shadow-2xl relative w-full h-full cursor-default">
      <div className="w-full h-full absolute group top-0 left-0 hover:-left-96 duration-500">
        <img
          className="w-full duration-700  z-50 h-full"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="team member"
        />
      </div>
      <h1 className="font-bold text-xl font-headingFont">Iamkeps1</h1>
      <h3 className="text-lg font-textFont">Full Stack Developer</h3>
      <p className="text-justify font-textFont">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam
        rem facere esse fugiat non error unde dolores accusamus quaerat impedit.
      </p>
      <div className="mt-5 flex gap-10">
        <FaLinkedinIn />
        <BsTwitterX />
        <FaYoutube />
      </div>
    </Card>
  );
}

export default AboutProfileCard;
