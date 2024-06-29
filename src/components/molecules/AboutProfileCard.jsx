import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
function AboutProfileCard() {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <img
        className="rounded-md w-40"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
        alt=""
      />
      <span className="font-bold">John</span>
      <span className="font-semibold">Lead Developer</span>
      <span className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        autem qui iusto cum deleniti, eum,{" "}
      </span>
      <div className="flex gap-3 ">
        <FaLinkedinIn />
        <BsTwitterX />
        <FaYoutube />
      </div>
    </div>
  );
}

export default AboutProfileCard;
