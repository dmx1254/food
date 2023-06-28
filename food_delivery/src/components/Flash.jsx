import React from "react";
import { FaStarHalfStroke, FaRegStar, FaStar } from "react-icons/fa6";

const Flash = ({ item }) => {
  return (
    <div className="flex flex-col p-4 border w-[300] justify-between h-[400px] border-[#00c893] rounded mb-10 ml-8">
      <div className="block items-start bg-red-600 rounded-[20px] p-1 w-[100px]">
        <span className="text-base font-semibold text-white ml-3">
          {item?.reduce}% OFF
        </span>
      </div>
      <img
        className="w-[150px] h-[160px] block mx-auto text-center bg-cover bg-center"
        src={item?.pop}
        alt={`flash-${item?.id}`}
      />
      <div className="flex items-start">
        <span className="text-lg font-semibold">{item?.name} </span>
      </div>
      <div className="flex items-start gap-1">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStarHalfStroke className="text-yellow-500" />
        <FaRegStar className="text-yellow-500" />
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-lg font-extrabold">
          ${item?.price}
          <span className="text-lg font-extrabold text-gray-400 line-through">
            214
          </span>
        </span>
        <span className="flex items-center justify-center bg-[#00c893] p-2 rounded cursor-pointer transition duration-500 ease-in-out hover:bg-green-600">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Flash;

// pop: flash3,
// name: "Fennel Bulb",
// starts: 5,
// price: 10,
// reduce
