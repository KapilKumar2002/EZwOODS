import React from "react";
import logo from "../../assets/logo.png";
import { tabs } from "../../utils/constants/Constants";
import RoundButton from "../../components/atoms/RoundButton";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-14 flex justify-between">
      <img src={logo} alt="" className="h-full" />
      <div className="text-red-200 w-1/3 rounded-full bg-violet-100/50 p-2">
        <ul className="w-full h-full flex gap-2 justify-between">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className="font-medium w-full rounded-full text-center text-black flex justify-center items-center hover:bg-white duration-700"
            >
              <Link to={tab.to}>{tab.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between gap-2">
        <RoundButton
          child={<p>V</p>}
          onClick={() => {
            console.log("Kapil");
          }}
        />
        <RoundButton />
        <RoundButton />
      </div>
    </div>
  );
};

export default Header;
