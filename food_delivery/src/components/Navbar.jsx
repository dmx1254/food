import React from "react";
import { useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { CgUser } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = ({ click }) => {
  const { count } = useSelector((state) => state.cart);
  return (
    <div className="flex items-center justify-between p-2 w-full h-[80px] border-b border-gray-300 sticky top-0 z-[999] bg-white">
      <div className="flex items-center gap-8 ml-12">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="bg-cover bg-center w-[200px] h-[60px]"
          />
        </Link>
        <div className="flex items-center gap-0">
          <span className="flex items-center justify-center cursor-pointer p-2 rounded bg-[#00c893] text-white">
            <IoSearch className="text-[26px]" />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search you product from here"
            className="text-base p-2 w-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 mr-12">
        <div>
          <span className="text-lg font-semibold cursor-pointer transition duration-500 ease-in-out hover:text-[#00c893]">
            <Link to="/shop">Shop</Link>
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold cursor-pointer transition duration-500 ease-in-out hover:text-[#00c893]">
            <Link to="/about">About Us</Link>
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold cursor-pointer transition duration-500 ease-in-out hover:text-[#00c893]">
            <Link to="/contact">Contact Us</Link>
          </span>
        </div>
        <div>
          <span className="cursor-pointer">
            <CgUser className="text-[28px]" />
          </span>
        </div>
        <div className="relative">
          <span
            className="cursor-pointer transition duration-500 ease-in-out hover:text-[#00c893]"
            onClick={click}
          >
            <FiShoppingBag className="text-[24px]" />
          </span>

          <span className="absolute flex items-center justify-center h-[25px] w-[25px] rounded-full bg-red-600 text-white text-sm font-semibold -top-[55%] left-[20%] cursor-pointer">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
