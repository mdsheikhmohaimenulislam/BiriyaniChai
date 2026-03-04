import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
