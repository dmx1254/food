import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../assets/banner1.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
// import "./styles.css";

const Hero = () => {
  const [images, setImages] = useState([
    {
      id: 125,
      source: banner1,
      title: "It's Time For Breakfast",
      buttonTitle: "SHOP NOW",
    },
    {
      id: 135,
      source: banner3,
      title: "You Deserve To Eat Food",
      buttonTitle: "SHOP NOW",
    },
    {
      id: 185,
      source: banner4,
      title: "Food Is Fuel Not Therapy",
      buttonTitle: "SHOP NOW",
    },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      arrows={false}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={600}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {images.map((image, index) => (
        <div className="relative w-full" key={index}>
          <div className="absolute flex flex-col items-start gap-12 w-[400px] top-[35%] left-[10%]">
            <h2 className="flex text-6xl font-bold w-full">{image?.title}</h2>
            <button className="bg-[#00c893] text-white text-base py-2 px-8 outline-none rounded transition duration-500 ease-in-out hover:opacity-90">
              {image?.buttonTitle}
            </button>
          </div>
          <img
            className="bg-cover bg-center w-full"
            src={image?.source}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
