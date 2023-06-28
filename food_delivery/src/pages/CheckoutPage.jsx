import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToCart } from "../features/cartSlice";

import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoCheckmarkDoneCircle,
  IoPlayBackSharp,
} from "react-icons/io5";

import "./styles.css";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-row items-start justify-between mt-12 mx-10">
      <div className="flex flex-col items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Details Personnels</h2>
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-row items-start justify-between gap-8">
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="lastanme"
                  className="text-base text-gray-400 font-semibold"
                >
                  Prenom
                </label>
                <input
                  type="text"
                  name="lastanme"
                  id="lastanme"
                  placeholder="Votre prenom"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="firstname"
                  className="text-base text-gray-400 font-semibold"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Votre prenom"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-between gap-8">
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="email"
                  className="text-base text-gray-400 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="johndoe@example.com"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="telephone"
                  className="text-base text-gray-400 font-semibold"
                >
                  Telephone
                </label>
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  required
                  placeholder="Votre telephone"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Details de Livraison</h2>
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="adress"
                  className="text-base text-gray-400 font-semibold"
                >
                  Adresse de Livraison
                </label>
                <input
                  type="text"
                  name="adress"
                  id="adress"
                  placeholder="Votre adresse de livraison"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
            </div>
            <div className="flex flex-row items-start flex-wrap justify-between gap-8">
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="country"
                  className="text-base text-gray-400 font-semibold"
                >
                  Pays
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Votre pays"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="city"
                  className="text-base text-gray-400 font-semibold"
                >
                  Ville
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  placeholder="Votre ville"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <label
                  htmlFor="postal"
                  className="text-base text-gray-400 font-semibold"
                >
                  Code Postal
                </label>
                <input
                  type="text"
                  name="postal"
                  id="postal"
                  placeholder="Code postal"
                  className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="adress"
                className="text-base text-gray-400 font-semibold"
              >
                Quartier
              </label>
              <input
                type="text"
                name="adress"
                id="adress"
                placeholder="Votre quartier de livraison"
                className="text-lg outline-none p-2 bg-gray-300 text-gray-500 rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Details de Paiements</h2>
          <div></div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="text-lg font-semibold">Passer une commande</h2>
          <div className="flex items-center gap-4 w-full">
            <button className="flex w-full items-center justify-center gap-2 text-base p-3 border-2 rounded border-[#00c893]">
              <IoPlayBackSharp />
              Continuer votre achat
            </button>
            <button className="flex w-full items-center justify-center gap-2 bg-[#00c893] p-3 rounded text-white">
              Confirmer votre commande
              <IoCheckmarkCircleSharp className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start border border-gray-400 w-full p-4 rounded">
        <h2 className="flex items-center justify-center text-lg font-semibold w-full bg-white">
          Details de la commande
        </h2>
        <div className="flex checkout flex-col items-center justify-between my-4 gap-4 w-full max-h-[400px] overflow-y-scroll">
          {cart?.map((item) => (
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center gap-2">
                <img
                  src={item?.pop}
                  className="w-[100px] h-[100px] bg-center bg-cover bg-no-repeat"
                  alt={`checkoutpage-${item?.id}`}
                />
                <div className="flex flex-col items-start">
                  <span className="text-lg font-normal">{item?.name}</span>
                  <span className="text-lg font-semibold">${item?.price}</span>
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
          ))}
        </div>
        <div className="flex items-center justify-between w-full gap-4">
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Entrer votre coupon"
            className="text-base p-4 rounded border border-[#00c893] outline-none w-3/4"
          />
          <button className="flex items-center justify-center bg-[#00c893] text-white rounded p-4 w-1/4 cursor-pointer transition duration-300 hover:bg-[#30b692]">
            Appliquer
          </button>
        </div>
        <div className="flex flex-col items-start gap-4 w-full mt-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-base text-gray-400">Subtotal</span>
            <span className="text-base font-semibold">${total}</span>
          </div>
          <div className="flex items-center justify-between  w-full">
            <span className="text-base text-gray-400">Tax</span>
            <span className="text-base font-semibold">${0}</span>
          </div>
          <div className="flex items-center justify-between  w-full">
            <span className="text-base text-gray-400">Shipping</span>
            <span className="text-base font-semibold">${20}</span>
          </div>
          <div className="flex items-center justify-between  w-full">
            <span className="text-base text-gray-400">Discount</span>
            <span className="text-base font-semibold">${20}</span>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <span className="text-base text-gray-400">Total</span>
            <span className="flex item justify-center text-base font-bold px-8 py-3 border rounded border-gray-400">
              ${total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
