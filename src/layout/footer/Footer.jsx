import React from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/atoms/Button";
import { footerData } from "../../utils/constants/Constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="px-12 py-6 flex md:flex-row flex-col-reverse md:gap-36 gap-10 pb-20">
        <div className="flex flex-col justify-start gap-3">
          <img className="h-36 w-36 md:self-center" src={logo} alt="" />
          <div className="text-lightText font-textFont">
            <p>Mangalmay Institute of Management Technology</p>
            <p>Greate Noida, Uttar Pradesh</p>
          </div>
          <h1 className="font-medium font-headingFont">ezwoods@info.in</h1>
          <Button />
        </div>
        <div className="w-full">
          <div className="grid lg:grid-cols-3 font-headingFont md:grid-cols-2 grid-cols-1">
            {footerData.map((data, index) => (
              <div key={index} className="flex flex-col gap-4">
                <p className="font-medium text-lg">{data.title}</p>

                <ul className="flex flex-col gap-2 ">
                  {data.links.map((link, ind) => (
                    <li key={ind}>
                      <Link
                        className="text-lightText hover:text-black duration-500"
                        to={link.to}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center p-2 font-buttonFont max-container bg-disabledColor h-16 rounded-t-3xl flex justify-center items-center md:mb-0 duration-500 mb-14">
        Copyright &copy; EZwOODs. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
