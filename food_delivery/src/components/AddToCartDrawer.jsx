import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoAdd, IoRemove } from "react-icons/io5";

import "./styles.css";

const AddToCartDrawer = ({ productToggle, addCartClick, singleProduct }) => {
  const dispatch = useDispatch();

  const notyfyAddToCartSuccess = () =>
    toast.success("Produit ajoute au panier avec sucess!");

  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(singleProduct?.price);
  const sideDrawerClass = ["addrawer"];
  if (productToggle) {
    sideDrawerClass.push("addshow");
  }

  const handleIcreaseAmount = () => {
    if (amount >= 0) {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };

  const handleDecreaseAmount = () => {
    if (amount > 0) {
      setAmount((prevAmount) =>
        prevAmount === 1 ? prevAmount : prevAmount - 1
      );
    }
  };

  useEffect(() => {
    !productToggle && setAmount(1);
  }, [productToggle]);

  useEffect(() => {
    setPrice(singleProduct?.price * amount);
  }, [amount, singleProduct]);

  const handleAddToCart = () => {
    const productAdded = {
      id: singleProduct?.id,
      pop: singleProduct?.pop,
      name: singleProduct?.name,
      price: singleProduct?.price,
      discount: singleProduct?.discount,
      quantity: amount,
      category: singleProduct?.category,
      subCategories: singleProduct?.subCategories,
      description: singleProduct?.description,
      total: price,
    };

    dispatch(addToCart(productAdded));
    notyfyAddToCartSuccess();
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="flex items-center justify-between m-2 p-4 w-full">
        <div className="w-1/2">
          <img
            className="flex items-center justify-center mx-auto w-[300px] h-[300px] bg-cover bg-center bg-no-repeat"
            src={singleProduct?.pop}
            alt={`singleProduct-${singleProduct?.id}`}
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-1/2 select-none">
          <h2 className="text-lg font-semibold">{singleProduct?.name}</h2>
          <p className="text-base text-gray-500">
            {singleProduct?.description}
          </p>
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-lg font-extrabold">${Number(price)}</h3>
            <span className="text-base text-gray-400 line-through">
              {singleProduct?.discount}
            </span>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center justify-between p-2 rounded border border-gray-500 w-[200px]">
              <span
                className="flex items-center justify-center text-lg text-gray-800 cursor-pointer"
                onClick={handleDecreaseAmount}
              >
                <IoRemove />
              </span>
              <span className="flex items-center justify-center text-lg font-semibold">
                {amount}
              </span>
              <span
                className="flex items-center justify-center text-lg text-gray-800 cursor-pointer"
                onClick={handleIcreaseAmount}
              >
                <IoAdd />
              </span>
            </div>
            <button
              className="flex items-center justify-center bg-[#00c893] w-[300px] text-lg p-2 rounded text-white transition duration-300 ease-in-out hover:bg-[#178366]"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-normal">Categorie: </span>
            <h2 className="text-base font-bold text-[#00c893]">
              {singleProduct?.category}
            </h2>
          </div>
          <div className="flex flex-row items-center gap-4 ml-2">
            {singleProduct?.subCategories?.map((cat, index) => (
              <>
                <span className="text-sm text-[#00c893] font-bold" key={index}>
                  {cat}
                </span>
              </>
            ))}
          </div>
        </div>
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

export default AddToCartDrawer;
