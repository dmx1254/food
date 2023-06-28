import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-row items-start justify-between mt-8 mb-0 mx-10 py-4">
      <div className="flex flex-col items-start gap-8">
        <h3 className="text-lg font-semibold">Company</h3>
        <div className="flex flex-col items-start gap-4">
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            About Us
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            FAQ
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Policy
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Condition
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8">
        <h3 className="text-lg font-semibold">Top Category</h3>
        <div className="flex flex-col items-start gap-4">
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Lunch
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Salad
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Breakfast
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Dinner
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8">
        <h3 className="text-lg font-semibold">My Account</h3>
        <div className="flex flex-col items-start gap-4">
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Dashboard
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            My Orders
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Updated Profile
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Change Password
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 -mt-2">
        <img
          src={logo}
          alt="logo"
          className="bg-cover bg-center w-[200px] h-[60px]"
        />
        <div className="flex flex-col items-start gap-4">
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            987 Andre Plain Suite High Street 838,
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Lake Hestertown, Tanzania
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Tel: +255 754661424
          </span>
          <span className="text-base font-normal transition duration-300 ease-in-out hover:text-[#00c893] cursor-pointer">
            Email: info@zpunet.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
