import React from "react";

const AddCartDrop = ({ addCartClick, productToggle }) => {
  return (
    productToggle && (
      <div
        className="backdrop fixed top-0 right-0 w-full h-screen bg-black bg-opacity-50 z-[3000]"
        onClick={addCartClick}
      >
        <button
          className="flex items-center justify-center z-[9999] outline-none bg-white text-[#ff231d] p-2 rounded-full absolute left-[97%] top-[2%] transition duration-300 ease-in-out hover:bg-[#e9908d]"
          onClick={addCartClick}
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
    )
  );
};

export default AddCartDrop;
