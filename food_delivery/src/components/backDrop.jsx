import React from "react";

const BackDrop = ({ show, click }) => {
  return (
    show && (
      <div
        className="backdrop fixed top-0 right-0 w-full h-screen bg-black bg-opacity-50 z-[3000]"
        onClick={click}
      ></div>
    )
  );
};

export default BackDrop;
