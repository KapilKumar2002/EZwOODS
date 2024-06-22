import React from "react";
import logo from "../../assets/logo.png";
import { tabs } from "../../utils/constants/Constants";
import RoundButton from "../../components/atoms/RoundButton";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="h-14 flex justify-between items-center gap-10">
      <img src={logo} alt="" className="h-full" />
      <div className="text-red-200 lg:w-1/2 w-full md:rounded-full bg-disabledColor p-2 md:h-full md:static fixed h-14 left-0 bottom-0 z-50">
        <ul className="w-full h-full flex gap-2 justify-between">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className="font-headingFont  h-full font-medium w-full rounded-full text-center text-black flex justify-center items-center hover:bg-primaryColor duration-700"
            >
              <Link
                className="h-full flex items-center justify-center px-2 md:text-lg text-xs"
                to={tab.to}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between gap-2">
        <RoundButton
          icon={<GrFavorite />}
          onClick={() => {
            console.log("Kapil");
          }}
        />
        <RoundButton to={"/cart"} icon={<LuShoppingCart />} />
        <RoundButton icon={<IoPersonOutline />} />
      </div>
    </div>
  );
};

export default Header;
