import React from "react";
import { Zoom } from "react-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  foods,
  drinks,
  fruits,
  popular,
  flashs,
  promotion,
} from "../utils/data";

import "./styles.css";
import PopularProduct from "../components/PopularProduct";
import Promotion from "../components/Promotion";
import Flash from "../components/Flash";

const Home = ({ getProduct, setProductToggle }) => {
  // const CustomLeftArrow = ({ onClick }) => (
  //   <button
  //     className="carousel-custom-arrow"
  //     onClick={() => onClick()}
  //     style={{ backgroundColor: "#00c893", color: "white" }}
  //   >
  //     &lt;
  //   </button>
  // );

  // const CustomRightArrow = ({ onClick }) => (
  //   <button
  //     className="carousel-custom-arrow"
  //     onClick={() => onClick()}
  //     style={{ backgroundColor: "#00c893", color: "white" }}
  //   >
  //     &gt;
  //   </button>
  // );

  return (
    <div className="flex flex-col flex-start gap-4 my-8 mx-10">
      <div className="flex items-center gap-8 mt-4">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="sm:w-6 sm:h-6 w-4 h-4 text-main"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-2xl text-[#00c893]"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
          </svg>
        </span>
        <h2 className="text-2xl font-bold -mt-1">Categories</h2>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col items-start gap-8 p-4 border border-gray-400 rounded-[10px]">
          <span className="text-lg font-semibold">Foods</span>
          <div className="flex items-center gap-4">
            {foods?.map((item) => (
              <div
                className="relative parent-drink flex flex-col items-center justify-between cursor-pointer overflow-hidden"
                key={item?.id}
              >
                <img
                  className="w-[90px] h-[90px] bg-cover bg-center"
                  src={item?.cat}
                  alt={`drink-${item?.id}`}
                />
                <div className="absolute flex items-center justify-center w-[90px] bg-[#00c893] h-[90px] rounded transition duration-500 ease-in-out translate-y-[88px]">
                  <span className="flex items-center justify-center text-base text-white font-semibold">
                    {item?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 p-4 border border-gray-400 rounded-[10px]">
          <span className="text-lg font-semibold">Drinks</span>
          <div className="flex items-center gap-4">
            {drinks?.map((item) => (
              <div
                className="relative parent-drink flex flex-col items-center justify-between cursor-pointer overflow-hidden"
                key={item?.id}
              >
                <img
                  className="w-[90px] h-[90px] bg-cover bg-center"
                  src={item?.cat}
                  alt={`drink-${item?.id}`}
                />
                <div className="absolute flex items-center justify-center w-[90px] bg-[#00c893] h-[90px] rounded transition duration-500 ease-in-out translate-y-[88px]">
                  <span className="flex items-center justify-center text-base text-white font-semibold">
                    {item?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 p-4 border border-gray-400 rounded-[10px]">
          <span className="text-lg font-semibold">Fruits</span>
          <div className="flex items-center gap-4">
            {fruits?.map((item) => (
              <div
                className="relative parent-fruit flex flex-col items-center justify-between cursor-pointer overflow-hidden"
                key={item?.id}
              >
                <img
                  className="w-[90px] h-[90px] bg-cover bg-center"
                  src={item?.cat}
                  alt={`fruit-${item?.id}`}
                />
                <div className="absolute flex items-center justify-center w-[90px] bg-[#00c893] h-[90px] rounded transition duration-500 ease-in-out translate-y-[88px]">
                  <span className="flex items-center justify-center text-base text-white font-semibold">
                    {item?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 mt-28">
        <div className="flex items-center gap-8 mt-4">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="sm:w-6 sm:h-6 w-4 h-4 text-main"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-2xl text-[#00c893]"
            >
              <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
            </svg>
          </span>
          <h2 className="text-2xl font-bold -mt-1">Popular Products</h2>
        </div>
        <Zoom>
          <div className="flex flex-row items-center justify-between flex-wrap w-full">
            {popular?.map((item) => (
              <PopularProduct
                getProduct={getProduct}
                item={item}
                key={item?.id}
                setProductToggle={setProductToggle}
              />
            ))}
          </div>
        </Zoom>
      </div>
      <div className="flex flex-row flex-wrap items-center w-full justify-between mt-28">
        {promotion?.map((item) => (
          <Promotion item={item} key={item?.id} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-8 mt-28">
        <div className="flex items-center gap-8 mt-4">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="sm:w-6 sm:h-6 w-4 h-4 text-main"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-2xl text-[#00c893]"
            >
              <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
            </svg>
          </span>
          <h2 className="text-2xl font-bold -mt-1">Flashs Deals</h2>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          itemClass=""
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={600}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {flashs.map((item) => (
            <Flash item={item} key={item?.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
