import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">

        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
         BiriyaniChai
          </Link>
        </div>
<div className="sm:hidden md:block">
          <Link
          to={"/addIftar"}
          class="relative inline-block px-4 py-2 font-medium group"
        >
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span class="relative text-black group-hover:text-white">
            Add ifer
          </span>
        </Link>
</div>
      </div>
    </div>
  );
};

export default Navbar;
