import React, { useState } from "react";
import "./styles.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 px-8 py-4">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#124235] text-[24px]"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M320 264l-89.6 112-38.4-44.88"
            ></path>
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
            ></path>
          </svg>
          <h2 className="text-lg font-semibold text-[#124235]">
            Shopping Cart
          </h2>
        </div>
        <button
          className="flex items-center justify-center outline-none text-[#ff231d] p-2 rounded-full transition duration-300 ease-in-out hover:bg-[#00c893] hover:text-white mr-2"
          onClick={click}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-start gap-12 p-4 w-full cursor-pointer max-h-[700px] overflow-y-scroll cart">
        {!cart?.lengh <= 0 ? (
          <div className="flex items-center flex-wrap justify-center text-lg">
            Votre panier est vide{" "}
            <Link to="/shop" className="text-[#00C893] mx-1">
              cliquer ici{" "}
            </Link>{" "}
            pour acheter
          </div>
        ) : (
          cart?.map((item) => <Cart item={item} key={item?.id} />)
        )}
      </div>
      <Link to="/checkout">
        <div className="flex flex-row items-center justify-between bg-[#00C893] cursor-pointer absolute top-[93%] w-full">
          <span className="text-lg text-white p-[18px] font-semibold">
            Proceed To Checkout
          </span>
          <span className="flex items-center justify-center bg-white rounded text-lg text-[#124235] font-bold p-2 mr-4">
            ${total}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SideDrawer;
