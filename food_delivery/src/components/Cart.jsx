import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart, changeQuantity } from "../features/cartSlice";

const Cart = ({ item }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const handleIcreaseAmount = (product) => {
    let quantity = product?.quantity + 1;
    dispatch(changeQuantity({ id: product?.id, quantity: quantity }));
  };

  const handleDecreaseAmount = (product) => {
    let quantity = product?.quantity - 1;
    dispatch(changeQuantity({ id: product?.id, quantity: quantity }));
  };

  // useEffect(() => {
  //   setPrice(singleProduct?.price * amount);
  // }, [amount, singleProduct]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-8 w-[350px]">
        <img
          className="flex items-center justify-center w-[80px] h-[80px] bg-cover bg-center"
          src={item?.pop}
          alt={`cart-${item?.id}`}
        />
        <div className="flex flex-col items-start gap-1">
          <span className="text-lg font-semibold">{item?.name}</span>
          <p className="text-lg font-extrabold">${item?.price}</p>
          <div className="flex flex-row items-center gap-0 border border-[#00c893] select-none">
            <span
              className="flex items-center justify-center text-lg text-gray-500 w-[42px] cursor-pointer transition duration-300 ease-in-out hover:bg-[#00c893] hover:text-white"
              onClick={() => handleDecreaseAmount(item)}
            >
              -
            </span>
            <span className="flex items-center justify-center text-lg text-gray-500 w-[42px] cursor-pointer">
              {item?.quantity}
            </span>
            <span
              className="flex items-center justify-center text-lg text-gray-500 w-[42px] cursor-pointer transition duration-300 ease-in-out hover:bg-[#00c893] hover:text-white
            "
              onClick={() => handleIcreaseAmount(item)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <button
        className="flex items-center justify-center outline-none text-white bg-[#ff231d] p-2 rounded transition duration-300 ease-in-out hover:bg-[#00c893] hover:text-white"
        onClick={() => dispatch(deleteToCart(item?.id))}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Cart;

// pop
// name
// price
