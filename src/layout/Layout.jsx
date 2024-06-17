import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-boxBg">
      <div className="p-4 flex flex-col gap-5">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
