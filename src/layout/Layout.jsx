import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className="p-4">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
