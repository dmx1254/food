import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopularProduct = ({ item, getProduct, setProductToggle }) => {

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   notyfyAddToCartSuccess();
  // }

  const handleAddProduct = (product) => {
    getProduct(product);
    setProductToggle(true);
  };

  return (
    <div className="flex flex-col gap-4 p-2 border w-[328px] justify-between h-[264px] border-[#00c893] rounded mb-10">
      <img
        className="w-[150px] h-[140px] block mx-auto text-center bg-cover bg-center"
        src={item?.pop}
        alt={`popular-${item?.id}`}
      />
      <div className="flex items-start">
        <span className="text-lg font-semibold">{item?.name} </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-extrabold">${item?.price}</span>
        <span
          className="flex items-center justify-center bg-[#00c893] p-2 rounded cursor-pointer transition duration-500 ease-in-out hover:bg-green-600"
          onClick={() => handleAddProduct(item)}
        >
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PopularProduct;
